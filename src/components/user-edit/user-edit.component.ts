import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, User } from 'src/models';
import { Location } from '@angular/common';
import { RolService } from 'src/services/rol.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit {

  @Input() typeComponent: "create" | "edit" = "edit";
  @Input() idUser: number = 0;
  public listRol: Role[] = [];
  matcher = new ErrorStateMatcher();
  private _form: FormGroup;

  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder, private userService: UserService, private ref: ChangeDetectorRef, private rolService: RolService, private location: Location) {
    this._form = this.fb.group({
      role: ["", Validators.required],
      name: ["", Validators.required],
      active: [false, Validators.required]
    });
  };
  ngOnInit(): void {
    this.getRoles();
    console.log(this.typeComponent);

    if (this.typeComponent === 'edit') {
      this.setUser(this.idUser);
    }
  }
  getRoles() {
    this.rolService.getRoles().then(
      response => {
        if (response.succes) {
          this.listRol = response.data;
        } else {
          this.listRol = [];
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    ).finally(() => {
      this.ref.markForCheck();
    })
  }
  setUser(idUser: number) {
    this.userService.getUser(idUser).then(
      response => {
        if (response.succes) {
          this._form = this.fb.group({
            role: [response.data.role.id, Validators.required],
            name: [response.data.name, Validators.required],
            active: [response.data.active === 'active' ? true : false, Validators.required]
          })
          this._form.get('name')?.disable();
        }

      }
    ).catch(err => {
      console.log(err);

    }).finally(() => {
      this.ref.markForCheck();
    });
  }
  get form(): FormGroup {
    if (this._form == null) {
      this._form = this.fb.group({
        role: ["", Validators.required],
        name: ["", Validators.required],
        active: [false, Validators.required]
      })
    }
    return this._form;
  }
  complete() {
    if (this.form.valid) {
      if (this.typeComponent === 'create') {
        this.create();
      } else if (this.typeComponent === 'edit') {
        this.update();
      }
    } else {
      this._snackBar.open('Formulario no compleatdo correctamente', 'Cerrar');
    }
  }
  update() {
    this.userService.upadteeUser(<User>{
      id: parseInt(this.idUser+'') ,
      active: this._form.get('active')?.value ? 'active' : 'inactive',
      name: this._form.get('name')?.value,
      role: this.listRol.filter(rol =>  rol.id === this._form.get('role')?.value)[0]
    }).then(
      response => {
        if (response.succes) {
          this._snackBar.open('Actualizado Con Exito', 'Cerrar');
        } else {
          this._snackBar.open('Error Al Actualizar', 'Cerrar');
        }
      }
    ).catch(err => {
      console.log(err);
      this._snackBar.open('Error al conectar con el servidor', 'Cerrar');
    }).finally(() => {
      this.ref.markForCheck();

    });
  }
  create() {
    this.userService.createUser(<User>{
      id: 0,
      active: this._form.get('active')?.value ? 'active' : 'inactive',
      name: this._form.get('name')?.value,
      role:this.listRol.filter(rol =>  rol.id === this._form.get('role')?.value)[0]
    }).then(
      response => {
        if (response.succes) {
          this._snackBar.open('Creado Con Exito', 'Cerrar');
          this.return();
        } else {
          this._snackBar.open(response.message, 'Cerrar');
        }
      }
    ).catch(err => {
      console.log(err);
      this._snackBar.open('Error al conectar con el servidor', 'Cerrar');
    }).finally(() => {
      this.ref.markForCheck();

    });

  }
  return() {
    this.location.back();
  }
  isValid(type: string): boolean {
    return this._form.get(type) == null ? false : this._form.get(type)!.valid;
  }
}
