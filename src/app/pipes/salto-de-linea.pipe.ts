import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saltoDeLinea',
})
export class SaltoDeLineaPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const newValue = value.replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    return newValue.replace(/\\n/g, '<br/>');
  }
}
