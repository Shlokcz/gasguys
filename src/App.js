import './App.css';
import Topheader from './Components/Top_Header/topheader';
import Bottomheader from './Components/Bottom_Header/bottomheader';
import Firstcontent from './Components/First_Content/firstcontent.js';
import Whoweare from './Components/whowearesection/whoweare.js';
import Services from './Components/ProductsandServices/services.js';
import Services2 from './Components/services2/services2.js';
import Premium from './Components/PremiumBrands/premium.js';
import BookAppointment from './Components/BookAppointment/BookAppointment.js'
import Location from './Components/Location/location.js';
import Subscribe from './Components/Subscribe/subscribe.js';
import Footer from './Components/Footer/footer.js' 

function App() {
  return (
    <div className="App">
      <Topheader />
      <Bottomheader />
      <Firstcontent />
      <Whoweare />
      <Services />
      <Services2 />
      <Premium />
      <BookAppointment />
      <Location />
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
