'use client';

import { productsListData } from '@/const';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const ProductListContainer = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {productsListData.map((product, index) => (
          <CarouselItem className="lg:basis-1/3" key={`product-${index}`}>
            <Card>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <div className="text-2xl font-bold">{product.name}</div>
                    <div className="text-2xl font-bold">{product.price}</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm">{product.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={'default'} />
      <CarouselNext variant={'default'} />
    </Carousel>
  );
};

export default ProductListContainer;
