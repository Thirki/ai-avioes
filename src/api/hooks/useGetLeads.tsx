import { useQuery } from "@tanstack/react-query";

export const leadsGroupQueryKey = "leadsGroup";

export type LeadsGroup = {
  id: string;
  name: string;
  source: string;
  totalLeads: number;
  invalidLeads: number;
  createdAt: Date;
  updatedAt: Date;
  status: "Processing" | "Completed";
  issueSummary: string;
};

const fetchLeadsGroup = () =>
  fetch("/api/leadsGroup").then<LeadsGroup[]>((r) => r.json());

export function useGetLeads() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [leadsGroupQueryKey],
    queryFn: fetchLeadsGroup,
  });
  return { data, isLoading, refetch };
}
