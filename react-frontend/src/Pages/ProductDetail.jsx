import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MainProductDetails from '../Components/Products/MainProductDetails'
import FooterFixedMobile from '../Components/FooterFixedMobile'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ProductDetail = () => {
  const {id} = useParams();

  // Scroll to top when page load 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <Header />
    <MainProductDetails id={id} />
    <Footer />
    <FooterFixedMobile />
    </>
  )
}

export default ProductDetail