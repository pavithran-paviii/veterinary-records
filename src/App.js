import "./App.css"
import { HomePageDiv } from "./components/HomePageDiv";
import { Navbar } from './components/Navbar';
import {Sidebar} from "./components/sidebar";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePageDiv/>
      <Sidebar>
          <a href="https://www.instagram.com/mohamed_afryn_zf/" target={"_blank"} rel="noreferrer"><InstagramIcon/></a>
          <a href="#afrintwitter" target={"_blank"} rel="noreferrer"><TwitterIcon/></a>
          <a href="mailto:pavithranr65@gmail.com" target={"_blank"} rel="noreferrer"><GoogleIcon/></a>
      </Sidebar>
    </div>
  );
}

export default App;
