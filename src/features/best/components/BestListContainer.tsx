import BestListItem from './BestListItem';
import { bestListData } from '@/const';

const BestListContainer = () => {
  return (
    <ul className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:gap-0">
      {bestListData.map(item => {
        return (
          <BestListItem
            key={item.title}
            image={item.image}
            title={item.title}
            src={item.src}
          />
        );
      })}
    </ul>
  );
};

export default BestListContainer;
