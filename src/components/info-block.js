import Arrow from '../assets/mdi_arrow_forward.png';
import '../styles/processtestimonials-styles.scss';

function InfoBlock ({number, features}){
   return (
      <div className='info-block-item'>
         <div className='info-list-container'>
            <div className='number-list-block'>
               <div className='block-number-container'>
                  <div className='block-number'>{number}</div>
               </div>
               <div className='features-list'>
                  {features.map((feature)=>{
                     return <div key={feature.id}>{feature.feature}</div>
                  })}
               </div>
            </div>
            <div className='learn-more-container'>
               <div className='button-arrow'>
                  <img src={Arrow} className='arrow' alt='arrow'></img>
               </div>
               <div className='button-text'>Learn more</div>
            </div>
         </div>
      </div>
   );
};

export default InfoBlock;