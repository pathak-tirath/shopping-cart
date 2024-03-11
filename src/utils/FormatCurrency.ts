
interface FormatProps{
    price:number
}
export const FormatCurrency:React.FC<FormatProps> = ({price}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(price);
};


