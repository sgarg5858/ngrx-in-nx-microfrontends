import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '@ngrx-in-nx-mfe/users/data-access';
import {UsersService} from '@ngrx-in-nx-mfe/users/data-access-with-service'
@Component({
  selector: 'ngrx-in-nx-mfe-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {


  
  constructor(public usersService:UsersFacade) { }

  ngOnInit(): void {
    this.usersService.getUsers();
  }
  filter(text:string)
  {
    this.usersService.filterUsers(text);
  }

}
