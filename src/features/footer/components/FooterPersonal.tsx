import InstagramSVG from '@/assets/images/instagram';
import { footerText, footerTextContainer } from '../style';
import Link from 'next/link';

const FooterPersonal = () => {
  return (
    <ul className={footerTextContainer}>
      <li className={footerText}>상호명: 헬스낵</li>
      <li className={footerText}>대표자: 박시현</li>
      <li className={footerText}>고객센터: 010-5069-5364</li>
      <li className={footerText}>이메일: edo68@naver.com</li>
      <Link
        target="_blank"
        href="https://www.instagram.com/healthsnack_meat?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
        className={footerText + ' flex flex-row gap-1'}
      >
        <InstagramSVG />
        healthsnack_meat
      </Link>
    </ul>
  );
};

export default FooterPersonal;
