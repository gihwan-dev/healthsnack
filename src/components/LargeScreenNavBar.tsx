'use client';

import { logoList } from '@/utils/ui-utils';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LargeScreenNavBar = () => {
  const [curLocation, setCurLocation] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (link: string) => {
    const newUrl = pathname + link;
    router.push(newUrl);
    setCurLocation(newUrl);
  };

  useEffect(() => {
    setCurLocation(window.location.href);
  }, []);

  return (
    <ul className={'flex flex-row gap-5 text-white'}>
      {logoList.map(link => {
        return (
          <li
            key={`nav-link-${link.text}`}
            className={cn(
              'transition-all hover:text-gold',
              curLocation.includes(link.link) ? 'text-gold' : '',
            )}
          >
            <button onClick={() => onClick(link.link)}>{link.text}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default LargeScreenNavBar;
