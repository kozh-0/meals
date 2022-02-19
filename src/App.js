import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Category from './pages/Category';
import RecipeList from './pages/RecipeList';
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
              <Route path='/category/:name' component={Category}/>
              <Route path='/meal-recipe/:idMeal' component={RecipeList}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        <Footer/>
    </Router>
  );
}
