import LogoWithText from '@/assets/images/logo-with-text';
import Link from 'next/link';

const logoList = [
  { text: '메인', link: '#main' },
  { text: '특징', link: '#features' },
  { text: '상품', link: '#products' },
  { text: '연락처', link: '#contact' },
];

export default function NavBar() {
  return (
    <nav
      className={
        'max-w-7xl ml-auto mr-auto flex flex-row justify-between py-9 bg'
      }
    >
      <LogoWithText />
      <ul className={'flex flex-row gap-5'}>
        {logoList.map(link => {
          return (
            <li key={`nav-link-${link.text}`}>
              <Link href={link.link}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
