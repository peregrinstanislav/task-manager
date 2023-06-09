import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../../../common-services/app-config.service';
import { Task } from '../models/task-management.model';

@Injectable()
export class TasksService {

    constructor(
        private httpClient: HttpClient,
        private appConfig: AppConfigService
    ) { }

    /**
     * Get tasks from api
     */
    public getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.appConfig.settings.apiUrl + 'tasks');
    }

    /**
     * Get task detail
     */
    public getTaskDetail(taskId: string): Observable<any> {
        return this.httpClient.get(this.appConfig.settings.apiUrl + 'tasks/' + taskId);
    }

    /**
     * Insert task to backend
     */
    public insertTask(task: Task): Observable<any> {
        return this.httpClient.post(this.appConfig.settings.apiUrl + 'tasks', task);
    }

    /**
     * Update task on backend
     */
    public updateTask(task: Task): Observable<any> {
        return this.httpClient.put(this.appConfig.settings.apiUrl + 'tasks/' + task._id, task);
    }

    /**
     * Delete task from backend
     */
    public deleteTask(taskId: string): Observable<any> {
        return this.httpClient.delete(this.appConfig.settings.apiUrl+ 'tasks/' + taskId);
    }
}