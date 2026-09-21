export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: 'EMPLOYEE' | 'SUPPORT_AGENT' | 'MANAGER' | 'ADMIN';
  departmentId?: string;
}