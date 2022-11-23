import AboutUs from './AboutUs';
import FollowUs from './FollowUs';
import QuickLinks from './QuickLinks';
import Subscribe from './Subscribe';

function FooterTop() {
  return (
    <div className='footerTopGrid'>
      <AboutUs />
      <QuickLinks />
      <FollowUs />
      <Subscribe />
    </div>
  );
}
export default FooterTop;
