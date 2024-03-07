
interface FormatProps{
    price:number
}
const FormatCurrency:React.FC<FormatProps> = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(price);
};

export default FormatCurrency;
