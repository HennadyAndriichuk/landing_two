import '../styles/footer-styles.scss';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Logo from '../assets/Logo.png';

function Footer () {
   return (
      <div className='footer-wrapper-bg'>
         <div className='footer-wrapper'>
            <div className='footer-content-container'>
               <div className='footer-content-wrapper'>
                  <div className='footer-content'>
                     <div className='footer-content-form'>
                        <div className='footer-title'>Send us  a message</div>
                        <div className='inputs-container'>
                           <input className='inputs-item' placeholder='Email'></input>
                           <input className='inputs-item' placeholder='Your name'></input>
                           <input className='inputs-item' placeholder='Your message'></input>
                        </div>
                        <button className='send-button'>Send</button>
                     </div>
                     <div className='footer-content-contacts'>
                        <div className='contacts-title'>Contact us</div>
                        <div className='contacts-container'>
                           <div className='item-container'>
                              <div className='item-title'>call us</div>
                              <div className='item-number'>654 321 987</div>
                           </div>
                           <div className='item-container'>
                              <div className='item-title'>Visit us</div>
                              <div className='item-number'>2905 West Drive, Buffalo Grove</div>
                           </div>
                           <div className='socials-container'>
                              <div className='item-title'>our socials</div>
                              <div className='item-social'>
                                 <img src={Facebook} alt='facebook'></img>
                                 <img src={Twitter} alt='twitter'></img>
                                 <img src={Instagram} alt='instagram'></img>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='footer-navbar-container'>
                  <div className='footer-logo'>
                     <img src={Logo} alt='logo'></img>
                  </div>
                  <div className='footer-navbar'>
                     <div className='navbar-item'>About us</div>
                     <div className='navbar-item'>Home</div>
                     <div className='navbar-item'>Work</div>
                     <div className='navbar-item'>Services</div>
                     <div className='navbar-item'>Contact Us</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer