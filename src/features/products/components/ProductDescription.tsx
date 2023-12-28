type Props = {
  name: string;
  description: string;
  price: number;
};

const ProductDescription: React.FC<Props> = ({ name, description, price }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-white">
      <h3>{name}</h3>
      <div>{description}</div>
      <div>{price.toLocaleString()}원</div>
    </div>
  );
};

export default ProductDescription;
