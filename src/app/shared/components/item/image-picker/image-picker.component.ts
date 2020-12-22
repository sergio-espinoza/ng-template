import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {
  @Input() public imageSource = '';
  @Output() private pickAnImageEmitter = new EventEmitter<void>();
  @Input() public isLoading = false;

  @Input() public isAvatarTypeImagePicker = false;

  public activatedFullscreen = false;

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

  public pickAnImage(): void {
    this.pickAnImageEmitter.emit();
  }

}

