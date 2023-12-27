'use client';

import Link from 'next/link';
import { logoList } from '@/utils/ui-utils';

const LargeScreenNavBar = () => {
  return (
    <ul className={'flex flex-row gap-5 text-white'}>
      {logoList.map(link => {
        return (
          <li
            key={`nav-link-${link.text}`}
            className={'hover:-text--gold transition-all'}
          >
            <Link href={link.link}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LargeScreenNavBar;
