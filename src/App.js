import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./assets/css/responsive.css";
import { Router,Redirect } from '@reach/router';





// components
import Menu from './assets/components/nav';
import Hero from './assets/components/hero'
import Rsvp from './assets/components/rsvp'
import Thanks from './assets/components/thanks'
import NoThanks from './assets/components/thankyou'
import Itinerary from './assets/components/itinerary'

const App = () => {

  return (
    <div>
     <Menu/>
     <Router>
     <Redirect from="/acwedding" to="/" />
     <Redirect from="/home" to="/" />
       <Hero path="/" />
       <Rsvp path="/rsvp"/>
       <Itinerary path="/itinerary"/> 
       <Thanks path="/thanks"/>
       <NoThanks path="/thankyou"/>
     </Router>

    </div>
  );
}

export default App;
