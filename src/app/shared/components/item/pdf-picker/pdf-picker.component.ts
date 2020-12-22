import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-pdf-picker',
  templateUrl: './pdf-picker.component.html',
  styleUrls: ['./pdf-picker.component.scss']
})
export class PdfPickerComponent implements OnInit {
  @Input() public pdfSource = '';
  @Output() private pdfFileChange = new EventEmitter<File>();
  @Input() public isLoading = false;
  @Input() private renderer: Renderer2 | undefined;

  @Input() public title = 'Documento';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public sendPdfFileChange(inputEvent: Event): void {
    inputEvent.preventDefault();
    const files = (inputEvent.target as HTMLInputElement).files;
    if (!files?.length) { return; }
    this.pdfFileChange.emit(files[0]);
  }

  public pickPdfFile(pdfFileInputEl: HTMLInputElement): void {
    console.log('pick');
    console.log(this.renderer);
    console.log(pdfFileInputEl);
    if (!this.renderer || !pdfFileInputEl) { return; }
    this.renderer.selectRootElement(pdfFileInputEl).click();
  }

}
