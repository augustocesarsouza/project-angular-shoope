export const spanQuantitySold = (quantity: number) => {
  if (quantity >= 1000) {
    let formatted = (quantity / 1000).toFixed(quantity % 1000 === 0 ? 0 : 1);
    formatted = formatted.replace('.', ',');
    return `${formatted}mil`;
  }

  return quantity.toString();
};

export const spanPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);

  return formattedPrice;
};
