import { motion } from 'framer-motion';

type Props = {
  name: string;
  description: string;
  price: number;
};

const ProductDescription: React.FC<Props> = ({ name, description, price }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 text-white">
      <h3 className="text-2xl font-semibold text-white">{name}</h3>
      <div className="text-gray-light h-24 w-72 break-words text-center text-xl">
        {description}
      </div>
      <div className="text-xl font-extrabold">{price.toLocaleString()}원</div>
    </div>
  );
};

export default ProductDescription;
