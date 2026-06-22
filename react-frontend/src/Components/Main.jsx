import Slider from './Main/Slider';
import Masonry from './Main/Masonry';
import LatestNews from './Main/LatestNews';
import ProductGrid from './Products/ProductGrid';
import LivingRoom from './LivingRoom';
import LookBook from './LookBook';
import SwiperSlider from './SwiperSlider';
import Instagram from './Instagram';
import ServicePromotion from './ServicePromotion';

const Main = () => {
    return (
        <main>

       <Slider />

       <Masonry />

        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

      {/* Best Selling Products */}
        < ProductGrid />
        {/* /.products-grid */}

        < div className="mb-5 pb-4" ></div >

      {/* Living Room Furniture Lookbook */}
        <LivingRoom />

      {/* Look Book for mobile - only visible on small screens, hidden on medium and larger screens */}
        <LookBook />

        <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>

      {/* Latest News */}
       <LatestNews />

        <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>

        {/* Carousel swiper-slider */}
        <SwiperSlider />
        {/* /.products-carousel container */}

        <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>

        {/* Instagram Container */}
        <Instagram />
        {/* /.instagram container */}

        <div className="mb-3 mb-xl-5"></div>

      {/* Service Promotion Section */}
        <ServicePromotion />
        {/* /.service-promotion container */}

        <div className="mb-3 mb-xl-5"></div>
      </main>
    );
};

export default Main;