import { Injectable } from '@angular/core';
import{observable,of} from"rxjs";
import{Task} from '../Task'
import{TASKS} from '../data-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Task[]{
    return TASKS;
  }

}
// class that has the injectible and the injectable decoration