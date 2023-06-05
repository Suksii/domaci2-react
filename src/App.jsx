import './App.css'
import Footer from "./components/footer/Footer.jsx";
import Introduction from "./components/introduction/Introduction.jsx";
import SoftwareDevelopment from "./components/title/softwareDevelopment/SoftwareDevelopment.jsx";
import Product from "./components/products/Product.jsx";
import ContactUs from "./components/contactUs/contactUs.jsx";
import InterestingTopics from "./components/interestingTopics/InterestingTopics.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
function App() {
  return (
      <div>
          <Navigation/>
          <SoftwareDevelopment/>
          <Introduction/>
          <Product/>
          <ContactUs/>
          <InterestingTopics/>
          <Footer/>
      </div>
  )
}

export default App
