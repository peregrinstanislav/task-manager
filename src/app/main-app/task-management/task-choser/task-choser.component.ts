import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonFormLoaderService } from 'src/app/common-services/form-json.service';

@Component({
    selector: 'app-task-choser',
    templateUrl: './task-choser.component.html',
    styleUrls: ['./task-choser.component.scss']
})
export class TaskChoserComponent {

    taskTypes: string[];

    form: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<TaskChoserComponent>,
        jsonFormLoaderService: JsonFormLoaderService
    ) {
        this.taskTypes = jsonFormLoaderService.getFormTypes();
        this.form = new FormGroup({
            taskType: new FormControl('', [Validators.required])
        });
    }

    selectionChanged(button: any): void {
        setTimeout(() => {
            button.focus();
        });
    }

    onBtnClick(result: boolean): void {
        if (result) {
            this.dialogRef.close({ selectedType: this.form.value.taskType });
        } else {
            this.dialogRef.close();
        }
    }
}
