import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TaskService } from '../TaskService';
import { GetStatusInterface } from './getStatusInterface';

@Component({
  selector: 'app-get-status',
  templateUrl: './get-status.component.html',
  styleUrls: ['./get-status.component.css']
})
export class GetStatusComponent implements OnInit {
  //public Task! : ITask[];
  public task! : GetStatusInterface[];
  form2 : any;
  status! : string;

  constructor(private taskservice : TaskService) { }

  ngOnInit(): void {
    //this.taskservice.getTask()
    //.subscribe(data => this.Task = data)

    //this.taskservice.getStatus(status)
     //.subscribe(data=>this.task=data)
     this.form2=new FormGroup({
      task_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      notes:new FormControl("",Validators.compose([Validators.required]))
      
      });

    }
    onSubmit(task:any) {
      this.taskservice.getStatus(task.status).subscribe(data=>this.task=data)
  }

}