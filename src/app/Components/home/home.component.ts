import { userList, taskList } from '../../services/interface.component';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private task: TaskService) {}
  taskList: taskList[] = [];
  userArray: userList[] = [];
  selected: any;
  isShown: boolean = false;
  isHide: boolean = false;
  today:Date=new Date();

  ngOnInit(): void {
    this.getTasks();
    this.getemps();
  }
  gg(event: any) {
    this.selected = event.target.value;
    console.log(this.selected);
  }
  state: string = '';
  getTasks() {
    this.taskList = [];
    this.task.getTasks().subscribe((res) => {
      this.taskList = res;
      console.log(this.taskList);
      // for (var i = 0; i < this.taskList.length; i++) {
      //   if (this.taskList[i].taskState == true) {
      //     this.isShown=false;
      //     this.isHide=true
      //   } else if (this.taskList[i].taskState == false) {
      //     this.isShown = true;
      //     this.isHide = false;
      //   }
      // }
    });
  }
  check(id:number){
    let params = {
      taskState:true,
    };
    console.log(id,params)
    this.task.editTask(id,params).subscribe(res=>{
      location.reload()
    })
  };
  addTasks(TaskName: any, date: any, des: string) {
    let params = {
      UserId: this.selected,
      DeliverDate: date,
      Discription: des,
      TaskName: TaskName,
    };
    this.task.addTasks(params).subscribe((res) => {
      console.log(res);
      this.getTasks();
      location.reload()
    });
  }
  getemps() {
    this.task.getemps().subscribe((response) => {
      console.log(response);
      this.userArray = response;
    });
  }
}
