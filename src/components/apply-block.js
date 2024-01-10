import '../styles/apply-block-styles.scss';

function ApplyBlock () {
   return (
      <div className="apply-block-wrapper">
         <div className='apply-block'>
            <div className='rectangles-wrapper'>
               <div className='rectangle-1'></div>
               <div className='rectangle-2'></div>
               <div className='rectangle-3'></div>
               <div className='rectangle-4'></div>
               <div className='rectangle-5'></div>
               <div className='rectangle-6'></div>
               <div className='rectangle-7'></div>
               <div className='rectangle-8'></div>
               <div className='rectangle-9'></div>
               <div className='rectangle-10'></div>
               <div className='rectangle-11'></div>
               <div className='rectangle-12'></div>
            </div>
            <div className='apply-text-wrapper'>
               <div className='apply-text-block'>
                  <div className='apply-title'>Vision, Passion, Results</div>
                  <div className='apply-text'>We are sure that first-rate job is possible
                   only if all three components are united.</div>
                  <button className='apply-button'>Apply</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ApplyBlock;