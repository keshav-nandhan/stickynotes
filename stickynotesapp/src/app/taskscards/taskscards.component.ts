import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks.model';
import { Observable } from 'rxjs';
import { TaskserviceService } from '../taskservice.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-taskscards',
  templateUrl: './taskscards.component.html',
  styleUrls: ['./taskscards.component.scss']
})
export class TaskscardsComponent implements OnInit {

taskitems:Observable<tasks[]>;
tasksnapshot:any;


constructor(private serviceobj:TaskserviceService,private authservice:AuthService,private router:Router ) {
    
  //console.log(this.tasksnapshot);
  //this.taskstodo=af.collection<tasks>('tasks');
  //this.tasks = this.taskstodo.valueChanges();
 }

 getTasks(){
   this.taskitems= this.serviceobj.getTasks();
 }

ngOnInit(): void {
  this.getTasks();
  }
signOut()
{
  this.authservice.Logout();
  this.router.navigate(['/login']);
}
  deleteItem(task) {
    //Get the task id
    console.log(task);
    let taskId = task.id;
    console.log("deleted");
    //delete the task 
    this.serviceobj.deleteTask(task);
    console.log("deleted");
 } //deleteTask
}
