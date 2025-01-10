import {  Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../login-and-register-user/interface/user';
import { UserCuponService } from '../../service/user-cupon.service';
import { UserCupon } from '../../../login-and-register-user/interface/user-cupon';

export interface ObjQuantityCupons {
  id: string;
  whichCupon: number;
  quantityCupons: number;
  nameTopCupon: string;
}

export interface CuponRecommendedProps {
  id: string;
  titleCupon: string;
  valueCupon: number;
  offPrice: string;
  showImgHeighlight: boolean;
  offDescription: string;
  imgCupon: string;
  imgAltCupon: string;
}

@Component({
  selector: 'app-my-cupons',
  templateUrl: './my-cupons.component.html',
  styleUrl: './my-cupons.component.scss'
})
export class MyCuponsComponent implements OnInit, OnDestroy {
  @ViewChild('buttonClaim') buttonClaim!: ElementRef<HTMLButtonElement>;
  @ViewChild('inputInsertCode') inputInsertCode!: ElementRef<HTMLInputElement>;
  isValidClickRescueButton = false;
  userObjState!: User | null;
  settimeOutArray: number[] = [];

  @ViewChildren('containerTopicCupons') containerTopicCupons!: QueryList<ElementRef<HTMLDivElement>>;

  // const [, setObjQuantityCupons] = useState<ObjQuantityCupons[] | null>(null);
  // const [allObjCupon, setAllObjCupon] = useState<DataCuposProps[] | null>(null);
  // const [objCuponRecommendedAll, setObjCuponRecommendedAll] = useState<
  //   CuponRecommendedProps[] | null
  // >(null);
  objQuantityCupons!: ObjQuantityCupons[];
  allObjCupon!: UserCupon[];
  objCuponRecommendedAll!: CuponRecommendedProps[];

  constructor(private router: Router, private userCuponService: UserCuponService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      this.userObjState = user;

      if(user){
        this.userCuponService.GetAllCuponByUserId(user.id, user.token).subscribe({
          next: (success) => {
            const data = success.data;
            this.formatCuponArray(data);
          },
          error: error => {
            if(error.status === 400){
              console.log(error);
              // this.confirmEmail = false;
            }

            if(error.status === 403){
              localStorage.removeItem('user');
              this.router.navigate(['/buyer/login']);
              // this.confirmEmail = false;
            }
          }
        });
      }
    }
  }

  formatCuponArray = async (data: UserCupon[]) => {
    const allObjCupon = data;

    const quantityTotalCupons = 0;
    let quantityCuponShopee = 0;
    let quantityCuponShop = 0;
    let quantityCuponDigitalPurchase = 0;
    let quantityPartner = 0;
    let quantityFinancialProducts = 0;

    allObjCupon.forEach((el) => {
      if(el.cuponDTO === null) return;

      if (el.cuponDTO.whatCuponNumber === 2) {
        quantityCuponShopee += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 3) {
        quantityCuponShop += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 4) {
        quantityCuponDigitalPurchase += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 5) {
        quantityPartner += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 6) {
        quantityFinancialProducts += el.cuponDTO.quantityCupons;
      }
    });

    const objCuponTotal = {
      id: 'f9200fe0-e2be-47ef-84ed-a47430844b7c',
      whichCupon: 1,
      quantityCupons: quantityTotalCupons,
      nameTopCupon: 'Todos',
    };

    const objCuponShopee = {
      id: 'e9591fd8-c01e-4f72-ad9c-420ae558b513',
      whichCupon: 2,
      quantityCupons: quantityCuponShopee,
      nameTopCupon: 'Shopee',
    };

    const objCuponShop = {
      id: '0a33522e-8ba5-4fdd-8039-829b4f5cec8b',
      whichCupon: 3,
      quantityCupons: quantityCuponShop,
      nameTopCupon: 'Loja',
    };

    const objCuponDigitalPurchase = {
      id: '78abbca1-bd14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 4,
      quantityCupons: quantityCuponDigitalPurchase,
      nameTopCupon: 'Compra Digital',
    };

    const objCuponDigital5 = {
      id: '78abgca1-bd14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 5,
      quantityCupons: quantityPartner,
      nameTopCupon: 'Parceiro',
    };

    const objCuponDigital6 = {
      id: '78abgca1-by14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 6,
      quantityCupons: quantityFinancialProducts,
      nameTopCupon: 'Produtos financeiros',
    };

    const quantityCupons =
      quantityCuponShopee +
      quantityCuponShop +
      quantityCuponDigitalPurchase +
      quantityPartner +
      quantityFinancialProducts;

    objCuponTotal.quantityCupons = quantityCupons;

    const allWhechCupon = [
      objCuponTotal,
      objCuponShopee,
      objCuponShop,
      objCuponDigitalPurchase,
      objCuponDigital5,
      objCuponDigital6,
    ];

    // setObjQuantityCupons(allWhechCupon);
    this.objQuantityCupons = allWhechCupon;
    this.allObjCupon = allObjCupon;

    // setAllObjCupon(allObjCupon);

    const objCuponRecommended1 = {
      id: '147a44b0-7ecd-40e2-9204-d41bc9b9eaf2',
      titleCupon:
        'Kit 5 Suporte Tutor Para Plantas Cercas Artesanatos Vasos de Bambu de 45cm ACM5UT45',
      valueCupon: 12.72,
      offPrice: '5% OFF',
      showImgHeighlight: false,
      offDescription: 'Nas compras acima de R$60',
      imgCupon: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-loiy1pd722mk3c',
      imgAltCupon: 'img-pan',
    };

    const objCuponRecommended2 = {
      id: '8041d9db-98ec-41bd-904d-7b7c8edaa2c1',
      titleCupon: 'Fertilizante Big Bud Advanced Nutrients',
      valueCupon: 42.9,
      offPrice: '2% OFF',
      showImgHeighlight: true,
      offDescription: 'Nas compras acima de R$50',
      imgCupon: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx7uns529xa72d',
      imgAltCupon: 'img-big-bud',
    };

    const allObjCuponRecommended1 = [objCuponRecommended1, objCuponRecommended2];

    // setObjCuponRecommendedAll(allObjCuponRecommended1);
    this.objCuponRecommendedAll = allObjCuponRecommended1;

    const value = setTimeout(() => {
      this.containerTopicCupons.forEach((el, i) => {
        el.nativeElement.style.borderBottom = "2px solid #00000014";
        const containerBeforeText = el.nativeElement.firstChild as HTMLElement;
        const containerText = containerBeforeText.firstChild as HTMLElement;
        containerText.style.color = "#484848";

        if(i === 0){
          el.nativeElement.style.borderBottom = "2px solid red";
          containerText.style.color = "#ee4d2d";
        }
      });
    }, 20)as unknown as number;

    this.settimeOutArray.push(value);
  };

  onChangeInputInsertCode = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (!target) {
      return;
    }

    const inputValue = target?.value || '';

    if(inputValue.length > 0){
      this.isValidClickRescueButton = true;

      this.buttonClaim.nativeElement.style.backgroundColor = '#ee4d2d';
      this.buttonClaim.nativeElement.style.color = '#fff';
      this.buttonClaim.nativeElement.style.cursor = 'pointer';
    }else {
      this.isValidClickRescueButton = false;

      this.buttonClaim.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      this.buttonClaim.nativeElement.style.color = '#fff';
      this.buttonClaim.nativeElement.style.cursor = 'not-allowed';
    }
  };

  onClickContainerSvgExit = () => {
    this.inputInsertCode.nativeElement.value = "";

    this.buttonClaim.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    this.buttonClaim.nativeElement.style.color = '#fff';
    this.buttonClaim.nativeElement.style.cursor = 'not-allowed';

    this.isValidClickRescueButton = false;
    // changeBackgroundAndCursorButtonRescue('rgba(0,0,0,.1)', 'auto');
  };

  onClickRescue = () => {
    if (!this.isValidClickRescueButton) return;
    console.log('button rescue');
  };

  allObjCuponsFilters: UserCupon[] = [];
  showContainerWithoutCupon = false;

  onClickShopee(containerTopicCupons: HTMLDivElement, numberClicked: number){
    if(numberClicked > 1){
      if (this.objQuantityCupons === null || this.allObjCupon === null) return;
      const allObjCuponsFilters = this.allObjCupon.filter(
        (el) => el.cuponDTO.whatCuponNumber === numberClicked
      );
      this.allObjCuponsFilters = allObjCuponsFilters;
      this.showContainerWithoutCupon = true;
    }else {
      this.allObjCuponsFilters = [];
      this.showContainerWithoutCupon = false;
    }

    this.containerTopicCupons.forEach((el) => {
      el.nativeElement.style.borderBottom = "2px solid #00000014";

      const containerBeforeText = el.nativeElement.firstChild as HTMLElement;
      const containerText = containerBeforeText.firstChild as HTMLElement;

      containerText.style.color = "rgb(72, 72, 72)";
    });

    containerTopicCupons.style.borderBottom = "2px solid red";
    const containerBeforeText = containerTopicCupons.firstChild as HTMLElement;
    const containerText = containerBeforeText.firstChild as HTMLElement;

    containerText.style.color = "rgb(238, 77, 45)";
  }

  // const [allObjCuponsFilters, setAllObjCuponsFilters] = useState<DataCuposProps[]>([]);
  // const [whichWasClickedCupon, setWhichWasClickedCupon] = useState(1);


  whatTopicClicked = (numberClicked: number) => {
    console.log(numberClicked);

    if(numberClicked > 1){
      if (this.objQuantityCupons === null || this.allObjCupon === null) return;
      const allObjCuponsFilters = this.allObjCupon.filter(
        (el) => el.cuponDTO.whatCuponNumber === numberClicked
      );
      this.allObjCuponsFilters = allObjCuponsFilters;
    }else {
      this.allObjCuponsFilters = [];
    }

  };

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((timeoutId) => clearTimeout(timeoutId));
  }
}
