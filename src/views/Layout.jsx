import React from 'react';
import propTypes from 'prop-types';
import './Layout.scss';
import Tabs from '../components/Tabs/Tabs';
import views from './views'

const Layout = props => {

  const tabNames = [];

  views.forEach(view => {
    tabNames.push(view);
  })

  return (
    <div className='wrapper'>
      <div className='tabsContainer'>
        <Tabs tabNames={tabNames}></Tabs>
      </div>
      <div className='contentContainer'></div>
    </div>
  );
};

export default Layout;
