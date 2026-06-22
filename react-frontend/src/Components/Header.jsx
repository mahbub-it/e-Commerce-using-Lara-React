
import SVG from "./Header/SVG";
import MobileHeader from "./Header/MobileHeader";
import MainHeader from "./Header/MainHeader";


const Header = ({ onOpenLogin, onOpenCart, onOpenSitemap }) => {
  return (
    <>
      <SVG />
      <MobileHeader 
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
      <MainHeader 
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
    </>
  );
};

export default Header;


     

      