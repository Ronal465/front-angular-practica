import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/models';
import { UserService } from 'src/services/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'rol', 'active','action'];

  public listUser: User[] = [];
  public textSearch: string = '';

  constructor(private userService: UserService, private ref: ChangeDetectorRef, private _snackBar: MatSnackBar, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  search() {
    if (this.textSearch) {
      this._snackBar.open('Buscando Usuarios', 'Cerrar');
      this.userService.getUserByname(this.textSearch).then(
        response => {
          if (response.succes) {
            this.listUser = response.data;
          } else {
            this.listUser = [];
            this._snackBar.open(response.message, 'Cerrar');
          }
        }
      ).catch(
        err => {
          console.log(err);
          this._snackBar.open('Error al conectar con el servidor', 'Cerrar');
        }
      ).finally(() => {
        this.ref.markForCheck();
      })
    } else {
      this.getUsers();
    }
  }
  delete(user: User) {
    this._snackBar.open('Borrando Rol', 'Cerrar');
    this.userService.deleteUser(user.id).then(
      response => {
        if (response.succes) {
          this._snackBar.open("Usaurio borrado correctamente", 'Cerrar');
        } else {

          this._snackBar.open(response.message, 'Cerrar');
        }
      }
    ).catch(
      err => {
        console.log(err);
        this._snackBar.open('Error al conectar con el servidor', 'Cerrar');
      }
    ).finally(() => {
      this.ref.markForCheck();
      this.getUsers();
    })
  }
  edit(user: User) {
    this.router.navigate([this.router.url.replace("list", "edit") + '/edit/' + user.id]);
  }
  return() {
    this.location.back();
  }
  clear() {
    this.textSearch = '';
    this.getUsers();
  }
  getUsers() {
    this._snackBar.open('Buscando Usuarios', 'Cerrar');
    this.userService.getUsers().then(
      response => {
        if (response.succes) {
          this.listUser = response.data;
        } else {
          this.listUser = [];
          this._snackBar.open(response.message, 'Cerrar');
        }
      }
    ).catch(
      err => {
        console.log(err);
        this._snackBar.open('Error al conectar con el servidor', 'Cerrar');
      }
    ).finally(() => {
      this.ref.markForCheck();
    })
  }

  getStatus(status: string) :string{
    return status === 'active' ? "Activo" : status === 'inactive' ? "Inactivo" : '';
  }
}
