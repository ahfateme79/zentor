import React from 'react';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Main from './component/main/main';
//import Footer from './component/footer/footer';
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer/>
    </React.Fragment>
  )
};

export default App;