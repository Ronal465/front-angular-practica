import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Input() listOption: { label: string, code: string, icon: string }[] = [{
    code: "",
    icon: "",
    label: ""
  }];
  @Input() title: string = 'Seleccione Una Opcion';
  @Input() template: 'simple' | 'advanced' = 'simple'
  @Output() onSelectecType = new EventEmitter<{ data: { label: string, code: string, icon: string }, type: 'selected' | 'err' }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  typeOption(option: { label: string, code: string, icon: string }) {
    this.onSelectecType.next({ data: option, type: 'selected' });
  }

}
