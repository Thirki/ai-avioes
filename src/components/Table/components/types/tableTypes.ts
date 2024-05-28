export interface ILeadsGroup {
  groupName: string;
  id: number;
  leadsDetails: ILeadsDetails[];
}

export interface ILeadsDetails {
  id: number;
  formId: number;
  leadId: number;
  phone: string;
  email: string;
  city: string;
}
