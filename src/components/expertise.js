import '../styles/expertise-styles.scss';
import ImageOne from '../assets/image1.png';
import ImageTwo from '../assets/image2.png';
import ImageThree from '../assets/image3.png';

function Expertise () {
   return(
      <div className='expertise-block-wrapper'>
         <div className='expertise-block'>
            <div className='expertise-block-title'>Our expertise</div>
            <div className='expertise-block-items'>
               <div className='expertise-block-item'>
                  <div className='item-image-wrapper'>
                     <img src={ImageOne} alt='image' className='item-image'></img>
                  </div>
                  <div className='item-info-block'>
                     <div className='item-title'>Branding</div>
                     <div className='item-text'>We create additional value for companies, products, services as well as verbal and visual ways to deliver it to the audience.</div>
                  </div>
               </div>
               <div className='expertise-block-item'>
                  <div className='item-image-wrapper'>
                     <img src={ImageTwo} alt='image' className='item-image'></img>
                  </div>
                  <div className='item-info-block'>
                     <div className='item-title'>Communication</div>
                     <div className='item-text'>We strive to create communications that can increase media performance. We use everything — words, meanings, stories, art, movies.
</div>
                  </div>
               </div>
               <div className='expertise-block-item'>
                  <div className='item-image-wrapper'>
                     <img src={ImageThree} alt='image' className='item-image'></img>
                  </div>
                  <div className='item-info-block'>
                     <div className='item-title'>Strategy</div>
                     <div className='item-text'>We create business growth strategies, from the moment of its birth to the achievement of the necessary business indicators.</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Expertise;