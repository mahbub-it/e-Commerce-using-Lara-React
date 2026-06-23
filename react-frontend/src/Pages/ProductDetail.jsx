import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MainProductDetails from '../Components/Products/MainProductDetails'

// fallback image used when a product image fails to load
// file lives under public/images/avatar-530x290.png, so use /images/... URL
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  // prevent infinite loop if fallback also fails
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

const ProductDetail = () => {

  const {id} = useParams();

  return (
    <>
    <Header />
    <MainProductDetails id={id} handleImgError={handleImgError} />
    <Footer />
    </>
  )
}

export default ProductDetail