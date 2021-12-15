import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import{Task} from '../../Task'
// import{TASKS} from '../../data-tasks'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[]=[];
// to add a service I need to add a provider
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks=tasks));//i need to subscribe to a Obsorvable as a promise
    // after adding the provider I can affecte the variable with service values
  }
deleteTask(task:Task){
  this.taskService.deleteTask(task).subscribe(()=>(this.tasks=this.tasks.filter(t=>t.id!== task.id)));//i need to subscribe to a Obsorvable as a promise

}
}
