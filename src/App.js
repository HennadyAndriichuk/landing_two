import './styles/app-styles.scss';
import Header from './components/header';
import WhoWeAre from './components/who-we-are';
import Expertise from './components/expertise';
import ProcessTestimonials from './components/process-testimonials';
import ApplyBlock from './components/apply-block';
import Footer from './components/footer';

function App (){
   return (
      <div>
         <div className="main">
            <div className="mainflow">
               <Header />
               <WhoWeAre />
               <Expertise />
               <ProcessTestimonials/>
               <ApplyBlock />
               <Footer />
            </div>
         </div>
      </div>
   )
}

export default App;