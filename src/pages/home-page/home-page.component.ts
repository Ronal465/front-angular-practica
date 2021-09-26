import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  typeSearch: { label: string, code: 'createUsuers' | 'listUsuers' | 'createRol' | 'listRol', icon: string }[] =
    [
      {
        label: 'Crear Usuarios',
        code: 'createUsuers',
        icon: "pi-plus-circle"
      },
      {
        label: 'Listar Usuarios',
        code: 'listUsuers',
        icon: "pi-plus-circle"
      },
      {
        label: 'Listar Roles',
        code: 'listRol',
        icon: "pi-plus-circle"
      }
    ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  typeSearchEvent(type: any) {
    if (type.type === 'selected') {
      this.router.navigate([this.router.url + this.getLink(type.data.code)]);
    }
  }
  getLink(text: string) :string{
    return text === "createUsuers" ? '/user/edit/create' : text === "listUsuers" ? '/user/list' : text === "createRol" ? '/role/edit/create' : text === "listRol" ? '/role/list' : '';

  }
}
