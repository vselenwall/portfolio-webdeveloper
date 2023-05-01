import React from 'react';

// components
import { About, Contact, Footer, Header, Portfolio } from './containers';
import { CTA, Gallery, Links, Navbar, Projects } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="Herosec">
        <Navbar />
        <Links />
        <Header />
        <CTA />
      </div>
      <About />
      <Portfolio />
      <Gallery />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

