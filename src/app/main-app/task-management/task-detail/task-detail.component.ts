import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, TaskType } from '../models/task-management.model';
import { JsonFormControls } from 'src/app/common-models/form-controls.model';
import { JsonFormLoaderService } from 'src/app/common-services/form-json.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { set } from 'lodash';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

    selectedTask!: Task;
    selectedType: TaskType;

    jsonFormControls: JsonFormControls[] = [];
    formGroup: FormGroup;

    isEditForm = false;

    constructor(
        private dialogRef: MatDialogRef<TaskDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private data: { update: boolean, data: any },
        private formBuilder: FormBuilder,
        private jsonFormLoaderService: JsonFormLoaderService
    ) {
        this.formGroup = formBuilder.group({});
        this.isEditForm = data.update;
        if (data.update) {
            this.selectedTask = data.data;
            this.selectedType = data.data.type;
        } else {
            this.selectedType = data.data;
        }
    }

    ngOnInit(): void {
        this.jsonFormControls = this.jsonFormLoaderService.getFormControls(this.selectedType);
        this.formGroup = this.jsonFormLoaderService.createForm(this.jsonFormControls, this.selectedTask, this.formGroup, this.formBuilder);
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onSaveClick(): void {
        const task = {
            _id: this.selectedTask?._id ?? undefined,
            type: this.selectedType,
        };
        for (const control of this.jsonFormControls) {
            let value = this.formGroup.value[control.name];
            if (control.type === 'number') {
                value = Number(value);
            }
            const path = control.objectPath;
            set(task, path, value);
        }
        this.dialogRef.close({ update: this.isEditForm, task });
    }
}
