import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { FormsExample } from './FormsExample';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { GetStatusComponent } from './get-status/get-status.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { PostTaskComponent } from './post-task/post-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskForm } from './TaskForm';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';

const routes: Routes = [
  {path : 'GetTaskByID', component : GetTaskComponent},
  {path : 'GetAllTasks', component : TaskDetailsComponent},
  {path : 'AddTask' , component : PostTaskComponent},
  {path : 'UpdateBookmark', component : UpdateBookmarkComponent},
  {path : 'UpdateNotes' , component : UpdateNotesComponent},
  {path : 'UpdatePriority', component : UpdatePriorityComponent},
  {path : 'DeleteTask' , component : DeleteTaskComponent},
  {path : 'GetTaskByStatus', component : GetStatusComponent},
  {path : 'assignTask', component : AssignTaskComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
