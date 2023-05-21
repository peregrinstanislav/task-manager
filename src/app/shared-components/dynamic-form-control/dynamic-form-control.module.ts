import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmService } from 'src/app/common-services/confirm-dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        DynamicFormControlComponent
    ],
    imports: [
        MatDialogModule,
        TranslateModule,
        MatButtonModule,
        MatInputModule,
        FlexLayoutModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    entryComponents: [
        DynamicFormControlComponent
    ],
    exports: [
        DynamicFormControlComponent
    ],
    providers: [
        ConfirmService
    ]
})

export class DynamicFormControlModule { }
