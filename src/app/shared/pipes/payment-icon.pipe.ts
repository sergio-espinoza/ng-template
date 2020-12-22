import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPaymentIcon'
})
export class PaymentIconPipe implements PipeTransform {
  private paymentIconMap = new Map<string, string>([
    ['mastercard', 'assets/imagenes-app/mastercard.svg'],
    ['visa', 'assets/imagenes-app/visa.svg']
  ]);

  transform(value: string, ...args: any[]): string {
    if (!args[0] || !value) { return ''; }
    if (value.startsWith('4')) {
      return this.paymentIconMap.get('visa') || '';
    }
    if (value.startsWith('5')) {
      return this.paymentIconMap.get('mastercard') || '';
    }
    return '';
  }
}


