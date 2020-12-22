import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import {
  ImagePickerComponent, PdfPickerComponent, TextInputComponent
} from './components';

import {
  ShowDirective
} from './directives';

import {
  IconBindingPipe,
  LinkhrefBindingPipe,
  SatinizerPipe,
  TypeOfDataPipe,
  ValidLabelPipe,
  SliceTextPipe,
  CheckUncheckPipe,
  CloseObjectPipe,
  PaymentIconPipe,
  DateBindingPipe,
} from './pipes';

const COMPONENTS = [
  ImagePickerComponent,
  PdfPickerComponent,
  TextInputComponent
];

const DIRECTIVES = [
  ShowDirective
];

const PIPES = [
  SatinizerPipe,
  IconBindingPipe,
  LinkhrefBindingPipe,
  ValidLabelPipe,
  TypeOfDataPipe,
  SliceTextPipe,
  CheckUncheckPipe,
  CloseObjectPipe,
  PaymentIconPipe,
  DateBindingPipe
];

const DIALOGS = [
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ...COMPONENTS,
    DIRECTIVES,
    ...PIPES
  ],
  declarations: [...COMPONENTS, DIRECTIVES, ...PIPES, ...DIALOGS],
  providers: [],
})
export class SharedModule { }
