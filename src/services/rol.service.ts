import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/models';
import { ResponseP } from 'src/models/services/response';
import { ResponsePList } from 'src/models/services/response-list';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  ApiURL = 'http://localhost:4444/api/role';

  constructor(private http: HttpClient) { }

  getRole(idRole: number): Promise<ResponseP<Role>> {
    return this.http.get<ResponseP<Role>>(`${this.ApiURL}/${idRole}`).toPromise();
  }
  getRoles(): Promise<ResponsePList<Role>> {
    return this.http.get<ResponsePList<Role>>(`${this.ApiURL}`).toPromise();
  }
  getRoleByname(name: string): Promise<ResponsePList<Role>> {
    return this.http.get<ResponsePList<Role>>(`${this.ApiURL}/field/${name}`).toPromise();
  }
  createRole(role: Role): Promise<ResponseP<Role>> {
    return this.http.post<ResponseP<Role>>(`${this.ApiURL}`, role).toPromise();
  }
  upadteeRole(role: Role): Promise<ResponseP<Role>> {
    return this.http.put<ResponseP<Role>>(`${this.ApiURL}`, role).toPromise();
  }
  deleteRole(idRole: number): Promise<ResponseP<Role>> {
    return this.http.delete<ResponseP<Role>>(`${this.ApiURL}/${idRole}`).toPromise();
  }
}
