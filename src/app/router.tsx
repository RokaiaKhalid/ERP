
import { createBrowserRouter } from 'react-router-dom';
import RegisterCompany from './pages/RegisterCompany';
import ManageUsers from './pages/ManageUsers';
import AssignRoles from './pages/AssignRoles';

export const router = createBrowserRouter([
  { path: '/register-company', element: <RegisterCompany /> },
  { path: '/manage-users', element: <ManageUsers /> },
  { path: '/assign-roles', element: <AssignRoles /> },
]);
