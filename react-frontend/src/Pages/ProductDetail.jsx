import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MainProductDetails from '../Components/Products/MainProductDetails'
import FooterFixedMobile from '../Components/FooterFixedMobile'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetail = () => {

  // API call for settings
  const [settings, setSettings] = useState([]);
  
    const settingsCall = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/settings');
      
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
  
    useEffect(() => {
      settingsCall();
    }, []);
    // API call end

  const {id} = useParams();

  // Scroll to top when page load 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <Header settings={settings} />
    <MainProductDetails id={id} />
    <Footer settings={settings} />
    <FooterFixedMobile settings={settings} />
    </>
  )
}

export default ProductDetail