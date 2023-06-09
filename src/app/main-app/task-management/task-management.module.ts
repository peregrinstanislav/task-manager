import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskManagementRoutes } from './taks-management.routing';
import { TranslateModule } from '@ngx-translate/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskChoserComponent } from './task-choser/task-choser.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmDialogModule } from 'src/app/shared-components/confirm-dialog/confirm-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormControlModule } from 'src/app/shared-components/dynamic-form-control/dynamic-form-control.module';
import { MatDividerModule } from '@angular/material/divider';
import { DialogButtonsModule } from 'src/app/shared-components/dialog-buttons/dialog-buttons.module';

@NgModule({
    declarations: [
        TaskListComponent,
        TaskDetailComponent,
        TaskChoserComponent
    ],
    imports: [
        TranslateModule,
        DxDataGridModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CommonModule,
        MatSelectModule,
        MatDialogModule,
        FlexLayoutModule,
        ConfirmDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDividerModule,
        DynamicFormControlModule,
        DialogButtonsModule,
        RouterModule.forChild(TaskManagementRoutes),
    ],
    exports: [],
    providers: [TasksService]
})
export class TaskMagementModule { }