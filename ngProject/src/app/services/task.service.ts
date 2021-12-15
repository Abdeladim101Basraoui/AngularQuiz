import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
//the of is no longer needed bcs the httpclient request return am oabservables
import{Observable} from"rxjs";

import{Task} from '../Task'
// import{TASKS} from '../data-tasks'
import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) {
// this.http to get the methodes available GET POST..

   }

  getTasks():Observable<Task[]>{
    // turn it into Observables
  // const tasks = of(TASKS) ;
  // return tasks
return this,this.http.get<Task[]>(this.apiUrl);  
}
deleteTask(task:Task):Observable<Task>{
const UrlRow = `${this.apiUrl}/${task.id}`;
return this.http.delete<Task>(UrlRow);
}
}
// class that has the injectible and the injectable decoration