import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorar() {
  return (
    <div>
      <Header pageTitle="Explorar" searchBtn={false} />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Explorar;
