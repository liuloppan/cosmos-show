import React from 'react';
import './Layout.scss';
import Tabs from '../components/Tabs/Tabs';
import views from './views'
import BeyondView from './Beyond/Beyond';

const Layout = () => {

  const tabNames = [];

  views.forEach(view => {
    tabNames.push(view);
  })

  return (
    <div className='wrapper'>
      <div className='tabsContainer'>
        <Tabs tabNames={tabNames}></Tabs>
      </div>
      <div className='contentContainer'>
        <BeyondView></BeyondView>
      </div>
    </div>
  );
};

export default Layout;
