import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  src: string;
};

const BestListItem = ({ image, title, src }: Props) => {
  return (
    <li
      className="w-full overflow-hidden rounded-md bg-white transition-all hover:-translate-y-2"
      style={{ maxWidth: 367 }}
    >
      <Link href={src} target="_blank">
        <Image src={image} alt="best product image" width={367} height={291} />
        <div className="whitespace-pre-wrap break-normal px-12 py-3 text-center text-lg font-semibold">
          {title}
        </div>
      </Link>
    </li>
  );
};

export default BestListItem;
