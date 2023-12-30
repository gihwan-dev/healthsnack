import { footerText, footerTextContainer } from '../style';

const FooterBusiness = () => {
  return (
    <ul className={footerTextContainer}>
      <li className={footerText}>
        사업장 소재지: <br />
        경기도 용인시 기흥구 공세로 150-29 <br />
        테라스가든B01-T362호
      </li>
      <li className={footerText}>
        사업자 등록 번호: <br />
        51830601246
      </li>
    </ul>
  );
};

export default FooterBusiness;
