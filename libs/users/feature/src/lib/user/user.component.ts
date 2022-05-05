import { Component, Input, OnInit } from '@angular/core';
import { User } from '@ngrx-in-nx-mfe/users/data-access-with-service';

@Component({
  selector: 'ngrx-in-nx-mfe-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:User|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
