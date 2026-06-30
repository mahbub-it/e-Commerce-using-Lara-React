import SVG from "./Header/SVG";
import MobileHeader from "./Header/MobileHeader";
import MainHeader from "./Header/MainHeader";

const Header = ({settings, cartCount, onOpenLogin, onOpenCart, onOpenSitemap }) => {

  return (
    <>
      <SVG />
      <MobileHeader settings={settings}
        cartCount={cartCount}
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
      <MainHeader settings={settings}
        cartCount={cartCount}
        onOpenLogin={onOpenLogin}
        onOpenCart={onOpenCart}
        onOpenSitemap={onOpenSitemap}
      />
    </>
  );
};

export default Header;


     

      