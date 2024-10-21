import { Outlet } from "react-router-dom";
import { loginPageHeroImg } from "../../utils/constants";
//import twitterBg from '../assets/twitter-bg.jpg'; 

const Authentication = () => {

  const pageStyle = {
    backgroundImage: "url('../assets/twitter-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    height: '100vh', // Make sure to cover the full viewport height
    width: '100vw',
  };

  return (
    <div style={pageStyle} className="min-h-screen flex items-center justify-center">
      <div className="bg-[white] flex rounded-2xl shadow-2xl max-w-3xl m-4 min-h-[600px] md:p-5 ">
        <Outlet />
        <div className=" md:flex hidden w-1/2 ">
          <img
            src={loginPageHeroImg}
            alt="login-page-img"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
    
  );
};

export { Authentication };
