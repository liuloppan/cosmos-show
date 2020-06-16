import React from 'react';
import { useSelector } from 'react-redux';
import './Layout.scss';
import Tabs from '../components/Tabs/Tabs';

import Beyond from './Beyond';
import General from './General';
import Earth from './Earth';

// ['General','Earth', 'Moon', 'Mars', 'Solar System', 'Beyond'
const viewNames = ['Earth', 'Solar System', 'Beyond'];

const Layout = () => {

  const tabNames = [];

  viewNames.forEach(view => {
    tabNames.push(view);
  })

  const currentView = useSelector(
    state => state.views.currentView
  );

  const renderCurrentView = () => {

    if ( currentView === 'Beyond')
      return <Beyond/>;
    else if( currentView === 'General') {
      return <General/>;
    }
    else if( currentView === 'Earth') {
      return <Earth/>;
    }

  }

  return (
    <div className='wrapper'>
      <div className='tabs-container'>
        <Tabs tabNames={tabNames}></Tabs>
      </div>
      <div className='content-container'>
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Layout;
