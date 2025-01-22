import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface objImgType {
  id: string;
  imgClicked: string;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateImgProductFlashSaleTypeService {

  private imgType = new BehaviorSubject<objImgType | null>(null);

  imgType$ = this.imgType.asObservable();

  updateImgType(img: objImgType | null) {
    this.imgType.next(img);
  }

  get currentImgType(): objImgType | null {
    return this.imgType.getValue();
  }
}
