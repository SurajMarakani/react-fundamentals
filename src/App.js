import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
       {/* the only thing that changes is the main content of the page which is controlled by sidebar from route changes */}
        <Sidebar />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;