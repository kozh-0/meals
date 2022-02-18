import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
        <Header/>
          <main className='container content'>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/about' component={About}/>
              <Route path='/contacts' component={Contact}/>
              <Route path='/movies/:title' component={Movie}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        <Footer/>
    </Router>
  );
}
