import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() inputData: any = {
    label: '',
    errorMessage: '',
    prefixIcon: 'check',
    minLength: '0',
    maxLength: '200',
    required: false,
    type: 'text'
  };
  @Input() formControlName = '';
  @Input() form?: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
