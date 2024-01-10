import '../styles/header-styles.scss';
import Logo from '../assets/Logo.png';
import SliderPhoto from '../assets/slider-Photo.png';
import LeftArrow from '../assets/mdi_chevron_left.png';
import RightArrow from '../assets/mdi_chevron_right.png';
import Burger from '../assets/Menu.png';

function Header () {
   return (
      <div className="header">
         <div className="header-menu-container">
            <div className="header-menu">
               <div className="header-logo">
                  <img src={Logo} alt='logo'></img>
               </div>
               <div className="header-navbar">
                  <img src={Burger} alt="burger" className = "burger"></img>
                  <div className="navbar-item">about us</div>
                  <div className="navbar-item">services</div>
                  <div className="navbar-item">testimonials</div>
                  <div className="navbar-item">contact us</div>
               </div>
               <div className="menu-item">hire us</div>
            </div>
         </div>
         <div className="header-content-wrapper">
            <div className="header-content">
               <div className="content-info-container">
                  <div className="content-info-wrapper">
                     <div className="content-info">
                        <div className="title-text-container">
                           <div className="content-title">Strategic<br />Agency</div>
                           <div className="content-title-mini">Strategic Agency</div>
                           <div className="content-text">We believe in the power of bold ideas that<br/> can solve business challenges.</div>
                        </div>
                        <div className="content-button">
                           <button>Learn more</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="content-slider-container">
                  <img src={SliderPhoto} alt="slider"></img>
                  <div className="slider-description-container">
                     <div className="arrows">
                        <div className="arrow">
                           <img src={LeftArrow} alt="arrow"></img>
                        </div>
                        <div className="arrow">
                           <img src={RightArrow} alt="arrow"></img>
                        </div>
                     </div>
                     <div className="title-text-wrapper">
                        <div className="title">intro</div>
                        <div className="description">By the same illusion which lifts the<br/> horizon.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;