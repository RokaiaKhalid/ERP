import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Company {
  id: string;
  name: string;
  contactEmail: string;
}

interface CompanyState {
  companies: Company[];
}

const initialState: CompanyState = {
  companies: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<Company[]>) {
      state.companies = action.payload;
    },
  },
});

export const { setCompanies } = companySlice.actions;
export default companySlice.reducer;
