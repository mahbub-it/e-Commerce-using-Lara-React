// 1. Only import layout blocks that are unique to the homepage
import Main from '../Components/Main'; 

const Home = () => {
  return (
    <>
      {/* Main landing page content blocks here */}
      <Main />
      
      {/* You can add extra homepage-specific components here later, like:
          <HeroSlider />
          <FeaturedProducts /> 
      */}
    </>
  );
};

export default Home;
