import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import Mach from './components/Mach';
import Header from './components/Header';
import View from './components/View';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route,withRouter ,Redirect} from 'react-router-dom';
import Listing from './components/script/Pages/Listing';
import Navbar from './components/script/Header/Navbar';
import Corousal from './components/script/Pages/Corousal';
import Hero from './components/script/Pages/Hero';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Route exact path=""><Redirect to="/listing" /></Route>
      <Route exact path="/listing" component={Listing}></Route>
      <Route exact path="/corousal" component={Corousal}></Route>
      <Route exact path="/hero" component={Hero}></Route>

    </div>
    </Router>
    </Provider>
    
  );
}

export default App;
