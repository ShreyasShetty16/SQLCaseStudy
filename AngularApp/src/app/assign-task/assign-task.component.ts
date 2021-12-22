import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Interface } from './Interface';
import { Service } from './Service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  public task3!:Interface[];
  form7:any;
  owner_ID! : number;
  task_ID!:number;
 

  constructor(private service : Service) { }

  ngOnInit(): void {
    this.form7=new FormGroup({
      owner_ID:new FormControl(
      "",
      Validators.compose([Validators.required])
      ),
      task_ID:new FormControl("",Validators.compose([Validators.required]))
      
      });
  }
  onSubmit(task3:any) {
    this.service.assignTask(task3.owner_ID,task3.task_ID).subscribe(data=>this.task3=data)
    alert("Task assigned");
    }

}
