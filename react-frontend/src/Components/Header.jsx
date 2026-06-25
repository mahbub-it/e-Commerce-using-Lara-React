import SVG from "./Header/SVG";
import MobileHeader from "./Header/MobileHeader";
import MainHeader from "./Header/MainHeader";

const Header = ({settings, onOpenLogin, onOpenCart, onOpenSitemap }) => {

  return (
    <>
      <SVG />
      <MobileHeader settings={settings}
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
      <MainHeader settings={settings}
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
    </>
  );
};

export default Header;


     

      