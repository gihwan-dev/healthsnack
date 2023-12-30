import { logoList } from '@/utils/ui-utils';
import Link from 'next/link';
import { footerLink, footerTextContainer } from '../style';

const FooterLink = () => {
  return (
    <ul className={footerTextContainer}>
      <li className="font-extrabold text-white">Link</li>
      {logoList.map(item => {
        return (
          <Link
            className={footerLink}
            key={`footer-link-${item.text}`}
            href={item.link}
          >
            {item.text}
          </Link>
        );
      })}
    </ul>
  );
};

export default FooterLink;
