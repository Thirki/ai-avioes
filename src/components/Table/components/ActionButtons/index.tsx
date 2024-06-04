import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Refresh from "@mui/icons-material/Refresh";
import { ILeadDetail, useReprocessingLead } from "../../../../api";
import { Wrapper } from "./style";
import { toast } from "react-toastify";
import { queryClient } from "../../../../lib";

interface IActionButtonsProps {
  leadsDetails: ILeadDetail;
}

export const ActionButtons: React.FC<IActionButtonsProps> = ({
  leadsDetails,
}) => {
  const [enableFetching, setEnableFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, refetch, isFetching, isFetched, key } = useReprocessingLead(
    leadsDetails.id,
    enableFetching
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(leadsDetails));
    toast.info("Leads copiado para área de transferencia.");
  };

  const handleReprocessing = () => {
    if (enableFetching) {
      refetch();
    }
    setEnableFetching(true);
  };

  useEffect(() => {
    if (isFetched) {
      if (data?.sucess) {
        setIsSuccess(true);
        toast.success("Leads reprocessado com sucesso.");
        return;
      }
      setIsSuccess(false);
      toast.error(
        "Erro ao reprocessar leads, Nome invalido, e-mail mal formatado",
        { autoClose: 10000 }
      );
    }
  }, [data, isFetched]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [key] });
    };
  }, [key]);

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
