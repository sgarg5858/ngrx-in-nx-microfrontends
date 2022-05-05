import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '@ngrx-in-nx-mfe/users/data-access-with-service';

@Component({
  selector: 'ngrx-in-nx-mfe-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  @Input() users:User[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
