'use client';

import { productsListData } from '@/const';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductDescription from './ProductDescription';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import ProductItem from './ProductItem';

const ProductListContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setSelectedProduct(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, type: 'spring' }}
      viewport={{ once: true, amount: 0.4 }}
      style={{ height: 600 }}
      className="flex flex-col gap-16 p-6"
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="xl:flex xl:w-auto xl:flex-row xl:items-center xl:justify-between xl:gap-0">
          {productsListData.map((product, index) => (
            <CarouselItem
              className="h-80 basis-full sm:h-96 xl:flex xl:basis-1/3 xl:flex-row xl:items-center xl:justify-center"
              key={`product-${index}`}
            >
              <ProductItem
                image={product.image}
                src={product.src}
                width={selectedProduct === index ? 366 : 268}
                height={selectedProduct === index ? 396 : 321}
                visibility={true}
                isCenter={selectedProduct === index}
                isBlur={selectedProduct !== index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={'default'} />
        <CarouselNext variant={'default'} />
      </Carousel>
      <ProductDescription
        name={productsListData[selectedProduct].name}
        description={productsListData[selectedProduct].description}
        price={productsListData[selectedProduct].price}
      />
    </motion.ul>
  );
};

export default ProductListContainer;
