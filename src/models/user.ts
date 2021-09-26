import { Role } from "./index";

export interface User {
  id: number;
  role: Role;
  name: string;
  active: 'active' | 'inactive';
  creattionDate: Date;
}
