import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./assets/css/responsive.css";
import { Router,Redirect } from '@reach/router';


// components
import Menu from './assets/components/nav';
import Hero from './assets/components/hero'
import Rsvp from './assets/components/rsvp'
import Itinerary from './assets/components/itinerary'
// import ErrorPage from './assets/components/404'

const App = () => {
  // const NotFound =() =><ErrorPage path="/404" />
  
  return (
    <>
     <Menu/>
      <Hero exact path="/*" />
      <Itinerary /> 
       <Rsvp />
     <Router>
     <Redirect from="/home" to="/" />
     </Router>
    </>
  );
}

export default App;
