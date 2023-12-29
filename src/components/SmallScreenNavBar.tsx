'use client';

import Hamburger from '@/assets/images/hamberger';
import { logoList } from '@/utils/ui-utils';
import Link from 'next/link';
import { useState } from 'react';

const SmallScreenNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickMenuButton = () => {
    setOpenMenu(true);
  };

  const onClickBackDrop = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <button onClick={onClickMenuButton} className={'cursor-pointer'}>
        <Hamburger />
      </button>
      {openMenu ? (
        <>
          <div
            onClick={onClickBackDrop}
            className={'fixed left-0 top-0 z-10 h-screen w-screen'}
          ></div>
          <ul
            className={
              'fixed right-0 top-0 z-20 flex h-screen w-10/12 max-w-xs flex-col gap-6 bg-black py-8 pl-8'
            }
          >
            {logoList.map(item => {
              return (
                <li key={`${item.text}-small-nav`}>
                  <Link
                    href={item.link}
                    className={'text-white transition-all hover:text-gold'}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default SmallScreenNavBar;
