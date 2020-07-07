import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(idImg: string): string {

    const URL = `https://drive.google.com/uc?id=${idImg}`;

    return URL;
  }

}
