import React from 'react';

// style
import './sass/style.scss';

// components
import { About, Contact, Footer, Header, Portfolio } from './containers';
import { CTA, Gallery, Links, Navbar, Projects } from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App

