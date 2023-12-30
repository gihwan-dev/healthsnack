import LogoWithText from '@/assets/images/logo-with-text';
import FooterPersonal from './FooterPersonal';
import FooterBusiness from './FooterBusiness';
import FooterMap from './FooterMap';
import FooterLink from './FooterLink';

const FooterContainer = () => {
  return (
    <div className="flex w-full flex-row flex-wrap justify-between gap-8">
      <LogoWithText />
      <FooterPersonal />
      <FooterBusiness />
      <FooterMap />
      <FooterLink />
    </div>
  );
};

export default FooterContainer;
