import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:ITask = {
    title: '',
    desciption:'',
    level: LEVELS.INFO,
    completed:false
  };


  details:boolean=false;

constructor(){}
ngOnInit(): void {
  
}
showDetails(){
  this.details=!this.details;
}
}
