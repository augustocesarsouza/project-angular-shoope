import { ProductFlashDeals } from "../../login-and-register-user/interface/product-flash-deals";

export const functionForPriceOriginal = (obj: ProductFlashDeals): string => {
  const priceOriginal = obj.priceProduct / (1 - obj.discountPercentage / 100);

  return (
    'R$' +
    priceOriginal.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

export const functionTitleFormat = (title: string): string => {
  const priceOriginal = title.slice(0, 50) + '...';

  return priceOriginal;
};

export const functionForPriceMainWithDiscount = (priceProduct: number): string => {
  const priceOriginal = priceProduct;

  return priceOriginal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
