'use client';

import { productsListData } from '@/const';
import { useEffect, useRef, useState } from 'react';
import { isBigSize, setLeftProduct, setRightProduct } from '../utils';
import ProductItem from './ProductItem';
import LeftArrow from '@/assets/images/left-arrow';
import RightArrow from '@/assets/images/right-arrow';
import ProductDescription from './ProductDescription';
import { useAnimate } from 'framer-motion';

const ProductListContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const productLength = productsListData.length;

  const leftProduct = setLeftProduct(selectedProduct, productLength);
  const rightProduct = setRightProduct(selectedProduct, productLength);

  const handleLeftClick = async () => {
    setTimeout(() => {
      setSelectedProduct(leftProduct);
    }, 1000);
  };

  const handleRightClick = () => {
    setSelectedProduct(rightProduct);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ul className="flex flex-col gap-16">
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20 xl:justify-between xl:gap-0">
        <button onClick={handleLeftClick}>
          <LeftArrow />
        </button>
        <ProductItem
          key={`product-item-${productsListData[leftProduct].name}`}
          visibility={isBigSize(windowWidth)}
          image={productsListData[leftProduct].image}
          src={productsListData[leftProduct].src}
          width={268}
          height={321}
          isBlur={true}
        />
        <ProductItem
          key={`product-item-${productsListData[selectedProduct].name}`}
          image={productsListData[selectedProduct].image}
          src={productsListData[selectedProduct].src}
          isCenter={true}
          width={366}
          height={396}
        />
        <ProductItem
          key={`product-item-${productsListData[rightProduct].name}`}
          visibility={isBigSize(windowWidth)}
          image={productsListData[rightProduct].image}
          src={productsListData[rightProduct].src}
          width={268}
          height={321}
          isBlur={true}
        />
        <button onClick={handleRightClick}>
          <RightArrow />
        </button>
      </div>
      <ProductDescription
        name={productsListData[selectedProduct].name}
        description={productsListData[selectedProduct].description}
        price={productsListData[selectedProduct].price}
      />
    </ul>
  );
};

export default ProductListContainer;
