import { useQuery } from "@tanstack/react-query";

export type sucessStatus = {
  sucess: boolean;
};

const fetchLeadsGroup = (leadId: string) =>
  fetch("/api/leadReprocessing", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ leadId }),
  }).then<sucessStatus>((r) => r.json());

export function useReprocessingLead(leadId: string, enabled = false) {
  const reprocessingLeadQueryKey = `reprocessingLead-${leadId}`;
  const { data, refetch, isFetching, isFetched } = useQuery({
    queryKey: [reprocessingLeadQueryKey],
    queryFn: () => fetchLeadsGroup(leadId),
    enabled,
  });
  return {
    data,
    refetch,
    isFetching,
    isFetched,
    key: reprocessingLeadQueryKey,
  };
}
