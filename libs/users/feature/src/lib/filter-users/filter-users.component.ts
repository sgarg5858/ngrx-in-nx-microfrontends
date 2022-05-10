import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'ngrx-in-nx-mfe-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilterUsersComponent implements OnInit,OnDestroy,OnChanges {

  @Input() text:string="";
  @Output() filterUsers=new EventEmitter<string>();

  mySub = new Subscription();

  filter = new FormControl("",[Validators.required]);

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if("text" in changes)
      {
        this.filter.setValue(changes['text'].currentValue)
      }
  }

  ngOnInit(): void {
    this.mySub.add(
      this.filter.valueChanges.pipe(debounceTime(200),distinctUntilChanged())
      .subscribe((value:string)=>
      {
        console.log(value);
        this.filterUsers.emit(value)
      }
      )
    )
  }
  ngOnDestroy(): void {
      this.mySub.unsubscribe();
  }

}
