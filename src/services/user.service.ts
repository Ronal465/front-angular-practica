import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models';
import { ResponseP } from 'src/models/services/response';
import { ResponsePList } from 'src/models/services/response-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ApiURL = 'http://localhost:4444/api/user';

  constructor(private http: HttpClient) { }


  getUser(idUser: number): Promise<ResponseP<User>> {
    return this.http.get<ResponseP<User>>(`${this.ApiURL}/${idUser}`).toPromise();
  }
  getUsers(): Promise<ResponsePList<User>> {
    return this.http.get<ResponsePList<User>>(`${this.ApiURL}`).toPromise();
  }
  getUserByname(name: string): Promise<ResponsePList<User>> {
    return this.http.get<ResponsePList<User>>(`${this.ApiURL}/field/${name}`).toPromise();
  }
  createUser(user: User): Promise<ResponseP<User>> {
    return this.http.post<ResponseP<User>>(`${this.ApiURL}`, user).toPromise();
  }
  upadteeUser(user: User): Promise<ResponseP<User>> {
    return this.http.put<ResponseP<User>>(`${this.ApiURL}`, user).toPromise();
  }
  deleteUser(idUser: number): Promise<ResponseP<User>> {
    return this.http.delete<ResponseP<User>>(`${this.ApiURL}/${idUser}`).toPromise();
  }
}
