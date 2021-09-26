import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Role } from 'src/models';
import { RolService } from 'src/services/rol.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];

  public listRole: Role[] = [];
  public textSearch: string = '';

  constructor(private roleService: RolService, private ref: ChangeDetectorRef, private _snackBar: MatSnackBar, private location: Location) { }

  ngOnInit(): void {
    this.getRoles();

  }
  search() {
    if (this.textSearch) {
      this._snackBar.open('Buscando Roles', 'Cerrar');
      this.roleService.getRoleByname(this.textSearch).then(
        response => {
          if (response.succes) {
            this.listRole = response.data;
          } else {
            this.listRole = [];
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
      this.getRoles();
    }
  }

  return() {
    this.location.back();
  }
  clear() {
    this.textSearch = '';
    this.getRoles();
  }


  getRoles() {
    this._snackBar.open('Buscando Roles', 'Cerrar');
    this.roleService.getRoles().then(
      response => {
        if (response.succes) {
          this.listRole = response.data;
        } else {
          this.listRole = [];
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

}
