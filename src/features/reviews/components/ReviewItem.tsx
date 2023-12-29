type ReviewItemProps = {
  children: React.ReactNode;
  isCenter: boolean;
  image: string;
  isShouldMove: boolean;
};

const ReviewItem: React.FC<ReviewItemProps> = ({
  children,
  isCenter,
  image,
  isShouldMove,
}) => {
  return (
    <li
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`${isCenter ? 'h-48' : 'h-44'} flex flex-1 px-3 ${
        isShouldMove ? '-mt-4' : ''
      } items-center justify-center overflow-hidden rounded-md font-bold text-white`}
    >
      <span className="text-center lg:w-2/3">{children}</span>
    </li>
  );
};

export default ReviewItem;
