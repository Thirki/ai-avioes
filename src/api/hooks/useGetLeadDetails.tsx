import { useQuery } from "@tanstack/react-query";

export const leadsDetailQueryKey = "leadDetail";

export type ILeadDetail = {
  id: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  createdAt: Date;
  status: "Valid" | "Invalid";
};

const fetchLeadDetails = async (leadId: string): Promise<ILeadDetail[]> => {
  const response = await fetch(`/api/leadDetail/${leadId}`);
  const data = await response.json();

  return data as ILeadDetail[];
};

export function useGetLeadDetails(leadId: string) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [leadsDetailQueryKey],
    queryFn: () => fetchLeadDetails(leadId),
  });
  return { data, isLoading, refetch };
}
