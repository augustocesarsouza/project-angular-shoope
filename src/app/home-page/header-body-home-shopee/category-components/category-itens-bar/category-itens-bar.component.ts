import { Component, OnInit } from '@angular/core';

interface Category {
  img: string;
  alt: string;
  title: string;
}

@Component({
    selector: 'app-category-itens-bar',
    templateUrl: './category-itens-bar.component.html',
    styleUrl: './category-itens-bar.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class CategoryItensBarComponent implements OnInit {
  allCategory: Category[] = [];

  ngOnInit(): void {
    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509252/img-category-itens-bar/br-50009109-dbc842365ecfc06a6cf498e48c648104_xhdpi_w8cxqe.png',
      alt: 'img-coin',
      title: 'Moedas'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509229/img-category-itens-bar/br-11134258-7r98o-lz4vwvoh490503_xhdpi_dquqoq.png',
      alt: 'img-awards',
      title: 'Prêmios'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509243/img-category-itens-bar/br-50009109-a7e907100bf29bb3be4d97c875220f66_xhdpi_rhqtqq.png',
      alt: 'img-free-shipping',
      title: 'Frete Grátis'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509236/img-category-itens-bar/br-50009109-26dd8941409120979bb42e4a76ed2f32_xhdpi_ljalc9.png',
      alt: 'img-cupons',
      title: 'Cupons'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509239/img-category-itens-bar/br-50009109-78637f80644e1ea477b48e7425a478db_xhdpi_omm54n.png',
      alt: 'img-official-stores',
      title: 'Lojas Oficiais'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509231/img-category-itens-bar/br-50009109-7e768ff05d209374444366d7d20bfc5c_xhdpi_foosu7.png',
      alt: 'img-lives',
      title: 'Lives'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509255/img-category-itens-bar/br-50009109-e256b2779cbf4de036e3b8b36ecec9e3_xhdpi_uhdgsn.png',
      alt: 'img-donations',
      title: 'Doações'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509249/img-category-itens-bar/br-50009109-d3f4cb0c3641ef1e3a24188a264b0023_xhdpi_zmztfh.png',
      alt: 'img-house-shopee',
      title: 'Casa Shopee'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509246/img-category-itens-bar/br-50009109-aeda49dd003d78e01e8e41e8aa207caa_xhdpi_ohdbws.png',
      alt: 'img-technology',
      title: 'Tecnologia'
    });

    this.allCategory.push({
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509234/img-category-itens-bar/br-50009109-8abac2253d30d61c340a188a81063279_xhdpi_l0owrh.png',
      alt: 'img-fashion',
      title: 'Moda'
    });
  }
}
