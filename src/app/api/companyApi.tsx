import axios from 'axios';

export interface CompanyPayload {
  name: string;
  industry?: string;
  contactEmail: string;
  phone?: string;
  address?: string;
}

export const registerCompany = async (data: CompanyPayload) => {
  const res = await axios.post('/api/companies', data);
  return res.data;
};
