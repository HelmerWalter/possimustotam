/* eslint @typescript-eslint/no-explicit-any: "off" */

import { subgraph } from "@bosonprotocol/core-sdk";
import { ethers } from "ethers";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useCoreSDKWithContext } from "../../../hooks/useCoreSdkWithContext";
import { ProgressStatus } from "../../../lib/progress/progressStatus";
import { Token } from "./convertion-rate/ConvertionRateContext";

export interface FundsProps {
  funds: Array<subgraph.FundsEntityFieldsFragment>;
  reload: React.DispatchWithoutAction;
  fundStatus: ProgressStatus;
}
export default function useFunds(
  accountId: string,
  tokens?: Token[] | null
): FundsProps {
  const coreSdk = useCoreSDKWithContext();
  const [numRequests, reload] = useReducer((state) => state + 1, 0);
  const [funds, setFunds] = useState<Array<subgraph.FundsEntityFieldsFragment>>(
    []
  );
  const [fundStatus, setFundStatus] = useState<ProgressStatus>(
    ProgressStatus.IDLE
  );

  const handleFunds = useCallback(
    (funds: Array<subgraph.FundsEntityFieldsFragment>) => {
      const mergeTokens: any[] = [
        ...funds,
        ...(tokens || [])
        // ...(CONFIG.nativeCoin ? [CONFIG.nativeCoin] : []) // TODO: check
      ];

      const allTokensParsed =
        mergeTokens
          ?.map((token: any, index: number) =>
            token?.name || token.availableAmount
              ? {
                  accountId,
                  availableAmount: token?.availableAmount || "0",
                  id: `${accountId}0x${String(index).padStart(2, "0")}`,
                  token: {
                    id:
                      token?.token?.id ||
                      token?.address ||
                      ethers.constants.AddressZero,
                    address:
                      token?.token?.address ||
                      token?.address ||
                      ethers.constants.AddressZero,
                    decimals: token?.token?.decimals || token?.decimals || "18",
                    name: token?.token?.name || token?.name,
                    symbol: token?.token?.symbol || token?.symbol
                  }
                }
              : null
          )
          .reduce((acc: Array<any>, o: any) => {
            if (o !== null) {
              if (
                !acc.some((obj: any) => obj?.token?.symbol === o?.token?.symbol)
              ) {
                acc.push(o);
              }
            }
            return acc;
          }, []) || [];
      setFundStatus(ProgressStatus.SUCCESS);
      setFunds(allTokensParsed);
    },
    [tokens, accountId]
  );

  const getFunds = useCallback(() => {
    if (accountId && coreSdk) {
      setFundStatus(ProgressStatus.LOADING);
      coreSdk
        .getFunds({
          fundsFilter: { accountId }
        })
        .then((funds) => handleFunds(funds))
        .catch(() => {
          setFundStatus(ProgressStatus.ERROR);
        });
    }
  }, [coreSdk, accountId, handleFunds]);

  useEffect(() => {
    getFunds();
  }, [getFunds, numRequests]);

  return { funds, reload, fundStatus };
}
