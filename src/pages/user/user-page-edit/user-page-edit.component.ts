import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page-edit',
  templateUrl: './user-page-edit.component.html',
  styleUrls: ['./user-page-edit.component.scss']
})
export class UserPageEditComponent implements OnInit {

  type: "create" | "edit" = "create";
  idUser: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.type =  params["type"] == null ? "edit" : params["type"];
      this.idUser = params["id"];
    })

  }

}
