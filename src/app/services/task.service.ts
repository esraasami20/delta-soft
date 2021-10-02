import { taskList, userList, State } from './interface.component';
import { ApiEnspoints } from './end-point';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getTasks() {
    return this.http.get<taskList[]>(
      `${ApiEnspoints.Endpoints.getAllTasks}`
    );
  }
  getemps() {
    return this.http.get<userList[]>(`${ApiEnspoints.Endpoints.getAllEmps}`);
  }
  addTasks(params: any) {
    return this.http.post<taskList>(
      `${ApiEnspoints.Endpoints.addTask}`,
      params
    );
  }
  editTask(id:number,params:any){
    return this.http.put<State>(`${ApiEnspoints.Endpoints.editTask}/${id}`, params);
  }
}
