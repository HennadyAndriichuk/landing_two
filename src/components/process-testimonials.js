import '../styles/processtestimonials-styles.scss';
import PhotoOne from '../assets/Rectangle_13.png';
import PhotoTwo from '../assets/Rectangle_14.png';
import PhotoThree from '../assets/Rectangle_15.png';
import Quotes from '../assets/Quotes.png';
import InfoBlock from './info-block';

const features = [
      [
      {id:1, feature: 'Brand Development'},
      {id:2, feature: 'Copywriting'},
      {id:3, feature: 'Logo & Webite Design'},
      {id:4, feature: 'Packaging'}
   ],
   [
      {id:1, feature: 'Marketing Strategy'},
      {id:2, feature: 'Email Marketing'},
      {id:3, feature: 'Paid Advertising'},
      {id:4, feature: 'Blog Content & SEO'}
   ],
   [
      {id:1, feature: 'Сontent Production'},
      {id:2, feature: 'Graphic Design'},
      {id:3, feature: 'Video Production'},
      {id:4, feature: 'Post Production'}
   ],
   [
      {id:1, feature: 'Digital Communications'},
      {id:2, feature: 'Influencer Marketing'},
      {id:3, feature: 'Product Placements'},
      {id:4, feature: 'Strategic Partnerships'}
   ],
]

function ProcessTestimonials () {
   return (
      <div className='processtestimonials-wrapper'>
         <div className='processtestimonials-block'>
            <div className='process-block'>
               <div className='process-service-wrapper'>
                  <div className='process-service-block'>
                     <div className='service-title-block'>
                        <div className='service'>service</div>
                        <div className='title'>Air is a full service creative agency</div>
                     </div>
                     <div className='text-block'>
                        <div className='text-item'>Deep analytics, strong strategy and bright creative ideas.</div>
                        <div className='text-item'>We are sure that first-rate job is possible only if all three components are united.</div>
                     </div>
                  </div>
                  <div className='info-block-wrapper'>
                     <InfoBlock number={'001'} features={features[0]}/>
                     <InfoBlock number={'003'} features={features[1]}/>
                  </div>
               </div>
               <div className='info-blocks-wrapper'>
                  <div className='info-block-wrapper'>
                     <InfoBlock number={'002'} features={features[2]}/>
                     <InfoBlock number={'004'} features={features[3]}/>
                  </div>
               </div>
            </div>
            <div className="testimonials-block">
               <div className='testimonials-block-header'>
                  <div className='testimonials-label'>Testimonials</div>
                  <div className='testimonials-title'>What people say</div>
               </div>
               <div className='testimonials-crads-block'>
                  <div className='testimonials-card'>
                     <div className='card-container'>
                        <div className='photo-wrapper'>
                           <div className='blue-rectangle-one'></div>
                           <div className='blue-rectangle-two'></div>
                           <img src={PhotoOne} alt='pic' className='photo-one'></img> 
                        </div>
                        <div className='info-section-container'>
                           <div className='quotes-text-container'>
                              <div className='quotes'>
                                 <img src={Quotes} alt='quotes'></img>
                              </div>
                              <div className='testimonials-text'>AIR's ideas are refreshing and out of
                                 the box. Authentic team that focuses
                                 on the important path of the brand.
                              </div>
                           </div>
                           <div className='name-company-container'>
                              <div className='name'>Tal Gilad</div>
                              <div className='company'>Teach for America</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='testimonials-card'>
                     <div className='card-container'>
                        <div className='photo-wrapper'>
                           <div className='blue-rectangle-one'></div>
                           <div className='blue-rectangle-two'></div>
                           <img src={PhotoTwo} alt='pic' className='photo-one'></img> 
                        </div>
                        <div className='info-section-container'>
                           <div className='quotes-text-container'>
                              <div className='quotes'>
                                 <img src={Quotes} alt='quotes'></img>
                              </div>
                              <div className='testimonials-text'>AIR is an exceptional agency that leads
                                 with creative talent, first-class account
                                 servicing.
                              </div>
                           </div>
                           <div className='name-company-container'>
                              <div className='name'>Azadeh Hawkins</div>
                              <div className='company'>Hawkins Consulting</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='testimonials-card'>
                     <div className='card-container'>
                        <div className='photo-wrapper'>
                           <div className='blue-rectangle-one'></div>
                           <div className='blue-rectangle-two'></div>
                           <img src={PhotoThree} alt='pic' className='photo-one'></img> 
                        </div>
                        <div className='info-section-container'>
                           <div className='quotes-text-container'>
                              <div className='quotes'>
                                 <img src={Quotes} alt='quotes'></img>
                              </div>
                              <div className='testimonials-text'>AIR raises the agency bar to
                                 stratospheric heights on both creative
                                 output and client service.
                              </div>
                           </div>
                           <div className='name-company-container'>
                              <div className='name'>Michel Grover</div>
                              <div className='company'>Hulu</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProcessTestimonials;