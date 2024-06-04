import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Refresh from "@mui/icons-material/Refresh";
import { ILeadDetail, useReprocessingLead } from "../../../../api";
import { Wrapper } from "./style";

interface IActionButtonsProps {
  leadsDetails: ILeadDetail;
}

export const ActionButtons: React.FC<IActionButtonsProps> = ({
  leadsDetails,
}) => {
  const [enableFetching, setEnableFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, refetch, isFetching } = useReprocessingLead(
    leadsDetails.id,
    enableFetching
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(leadsDetails));
    // @TODO: add sucess alert
  };

  const handleReprocessing = () => {
    if (enableFetching) {
      refetch();
    }
    setEnableFetching(true);
  };

  useEffect(() => {
    if (data?.sucess) {
      setIsSuccess(true);
      // @TODO: adicionar modal para tratar erro e sucesso
      console.log("sucess");
      return;
    }
    setIsSuccess(false);
    console.log("errors");
  }, [data]);

  return (
    <Wrapper>
      <LoadingButton
        loading={isFetching}
        disabled={isFetching || isSuccess}
        loadingPosition="center"
        variant="outlined"
        size="small"
        onClick={handleReprocessing}
      >
        <Refresh />
      </LoadingButton>
      <IconButton aria-label="copy" onClick={handleCopy}>
        <FileCopyIcon />
      </IconButton>
    </Wrapper>
  );
};
