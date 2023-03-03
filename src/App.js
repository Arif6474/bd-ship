
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Partials/Footer/Footer';
import AboutUs from './Component/Screens/AboutUs/AboutUs';
import BerthingReport from './Component/Screens/BerthingReport/BerthingReport';
import Circulars from './Component/Screens/Circulars/Circulars';
import EditProfile from './Component/Screens/EditProfile/EditProfile';
import Home from './Component/Screens/Home/Home';
import Members from './Component/Screens/Members/Members';
import NewsEventDetails from './Component/Screens/NewsEventDetails/NewsEventDetails';
import NewsEvents from './Component/Screens/NewsEvents/NewsEvents';
import Profile from './Component/Screens/Profile/Profile';
import ShippingStat from './Component/Screens/ShippingStat/ShippingStat';
import TrainingDev from './Component/Screens/TrainingDev/TrainingDev';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/berthing-report' element={<BerthingReport />} />
          <Route path='/circulars' element={<Circulars />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/members' element={<Members />} />
          <Route path='/news-event-details/:id' element={<NewsEventDetails />} />
          <Route path='/news-events' element={<NewsEvents />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shipping-stat' element={<ShippingStat />} />
          <Route path='/training-dev' element={<TrainingDev />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
