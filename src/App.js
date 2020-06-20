import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import st from './css/App.module.less';

const App = () => {
  return (
    <div className={st.app_wrapper}>
      <Header />

      <Navbar />

      <Profile />

    </div>
  );
}



export default App;
