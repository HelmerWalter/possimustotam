import React from "react";
import { WarningCircle } from "phosphor-react";
import { useEffect } from "react";

import Grid from "../../../../ui/Grid";
import Typography from "../../../../ui/Typography";
import { useModal } from "../../../useModal";
import { theme } from "../../../../../theme";

const colors = theme.colors.light;

export default function ConfirmationFailedModal() {
  const { updateProps, store } = useModal();
  useEffect(() => {
    updateProps<"CONFIRMATION_FAILED">({
      ...store,
      modalProps: {
        ...store.modalProps
      },
      modalSize: "auto",
      modalMaxWidth: {
        xs: "550px"
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid flexDirection="column" alignItems="center">
      <WarningCircle size={128} color={colors.orange} />

      <Typography fontWeight="600" $fontSize="1.5rem" lineHeight="150%">
        Confirmation Failed
      </Typography>
      <Typography
        fontWeight="400"
        $fontSize="1rem"
        lineHeight="150%"
        margin="0.5rem 0 1.5rem 0"
      >
        Please retry this action
      </Typography>
    </Grid>
  );
}
