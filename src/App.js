import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/Home'
import SingleNewsPage from './pages/SingleNews'
import Default from './pages/Default';
import NewsPage from './pages/News';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
     <main>
       <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/news/" exact component={NewsPage}></Route>
          <Route path="/news/:id" component={SingleNewsPage}></Route>
          <Route component={Default}></Route>
        </Switch>
     </main>
    </Router>
  );
}

export default App;
