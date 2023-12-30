import InstagramSVG from '@/assets/images/instagram';
import { footerText, footerTextContainer } from '../style';

const FooterPersonal = () => {
  return (
    <ul className={footerTextContainer}>
      <li className={footerText}>상호명: 헬스낵</li>
      <li className={footerText}>대표자: 박시현</li>
      <li className={footerText}>고객센터: 010-5069-5364</li>
      <li className={footerText}>이메일: edo68@naver.com</li>
      <li className={footerText + ' flex flex-row gap-1'}>
        <InstagramSVG />
        healthsnack_meat
      </li>
    </ul>
  );
};

export default FooterPersonal;
