import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../../../../login-and-register-user/interface/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  allCategory: Categories[] = [];

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.allCategory = [
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-414d-9283-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013c79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-e08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
      {id: '013h79bf-j08c-714d-9223-b788a996ac6b', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'},
    ];
  }

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1000, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 1000, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }
}
