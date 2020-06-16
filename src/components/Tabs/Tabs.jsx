import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import './Tabs.scss';
import { setCurrentView } from './../../api/Redux/Actions';

const Tabs = props => {

  const { tabNames } = props;
  const dispatch = useDispatch();
  const [active, setActive] = useState('moon');

  const createOnClick = tabName => () => {
    setActive(tabName);
    dispatch(setCurrentView(tabName));
  };

  const createTab = (text, isActive, onClick) => {
    let tabStyle = `${'tabMain'} ${'small'} ${isActive && 'active'}`;
    let textStyle = 'tabText';

    return (
      <div
        className={tabStyle}
        onClick={onClick}
      >
        <div className={textStyle}>
          {text}
        </div>
      </div>
    );
  };

  const tabsSetup = () => {
    const tabs = [];
    tabNames.forEach(tabName => {
      tabs.push(
        <div key={tabName}>
          {createTab(tabName,
            active === tabName,
            createOnClick(tabName)
          )}
        </div>
      );
    });
    return tabs;
  };

  return (
    <div className='tabsWrapper'>
      {tabsSetup()}
    </div>
  );
};

Tabs.propTypes = {
};

Tabs.defaultProps = {
};

export default Tabs;
