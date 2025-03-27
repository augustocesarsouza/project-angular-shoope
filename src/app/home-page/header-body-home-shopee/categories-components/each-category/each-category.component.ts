import { Component, Input } from '@angular/core';
import { Categories } from '../../../../login-and-register-user/interface/categories';

@Component({
    selector: 'app-each-category',
    templateUrl: './each-category.component.html',
    styleUrl: './each-category.component.scss',
    standalone: false
})
export class EachCategoryComponent {
  @Input() category!: Categories;

}
