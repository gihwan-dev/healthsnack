'use client';

import ReviewItem from './ReviewItem';
import ReviewImage1 from '@/assets/images/review1.jpg';
import ReviewImage2 from '@/assets/images/review2.jpg';
import ReviewImage3 from '@/assets/images/review3.jpg';
import ReviewImage4 from '@/assets/images/review4.jpg';
import ReviewImage5 from '@/assets/images/review5.jpg';
import ReviewImage6 from '@/assets/images/review6.jpg';
import { useEffect, useState } from 'react';

const reviewData = [
  {
    text: '"정말 맛있어요"',
    image: ReviewImage1.src,
  },
  {
    text: '"배송 빠르고 고기 품질도 아주 만족해요ㅎㅎ"',
    image: ReviewImage2.src,
  },
  {
    text: '"덕분에 맛있는 캠핑 이었어요!"',
    image: ReviewImage3.src,
  },
  {
    text: '"조리하기도 쉽고 잘멋었어요!"',
    image: ReviewImage4.src,
  },
  {
    text: '"캠핑장에서 먹었는데 너무 맛있었어요!"',
    image: ReviewImage5.src,
  },
  {
    text: '"양도 많고 맛있습니다!"',
    image: ReviewImage6.src,
  },
];
const ReviewContainer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIsCenter = (index: number) => {
    return index === 1 || index === 4;
  };
  const isShouldMove = (index: number) => {
    return index === 3 || index === 5;
  };

  const isSmallScreen = width < 1024;

  return (
    <ul className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
      {reviewData.map((review, index) => (
        <ReviewItem
          isCenter={getIsCenter(index) && !isSmallScreen}
          image={review.image}
          key={`review-item-${index}`}
          isShouldMove={isShouldMove(index) && !isSmallScreen}
        >
          {review.text}
        </ReviewItem>
      ))}
    </ul>
  );
};

export default ReviewContainer;
