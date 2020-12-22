import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appIconbinding'
})
export class IconBindingPipe implements PipeTransform {
  private iconMap = new Map<any, any>([
    ['pdf', 'picture_as_pdf'],
    ['txt', 'spellcheck'],
    ['xls', 'insert_chart'],
    ['xlsx', 'insert_chart'],
    ['rar', 'toc'],
    ['zip', 'toc'],
    ['png', 'insert_photo'],
    ['jpg', 'insert_photo'],
    ['jpeg', 'insert_photo'],
    ['gif', 'insert_photo'],
    ['video', 'movie'],
    ['doc', 'description'],
    ['docx', 'description'],
    ['html', 'code'],
    ['htm', 'code'],
    ['svg', 'color_lens'],
    ['odt', 'description'],
    ['epub', 'menu_book'],
    ['ods', 'insert_chart'],
    ['ppt', 'album'],
    ['pptx', 'album'],
    ['email', 'email'],
    ['phone', 'phone'],
    ['image', 'insert_photo'],
    ['website', 'web'],
  ]);

  transform(value: any): any | undefined {
    if (!this.iconMap.has(value)) {
      return 'category';
    }
    return this.iconMap.get(value);
  }
}
