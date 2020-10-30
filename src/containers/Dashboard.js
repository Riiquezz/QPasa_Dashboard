import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Customers from './Customers';

import Analytics from './Analytics';


const Dashboard = () => 
  <div className='fluid-container'>
    <div className='row'>
      <div className='aside col-md-2 col-sm-3 sidebarMenu'>
        <Menu />
      </div>
      <div className='main col-md-10'>       
        <div className='fluid-container'>
          <Route exact path='/' component={Main} />
          <Route path='/customers' component={Customers} />

          <Route path='/analytics' component={Analytics} />
        </div>
      </div> 
    </div> 
  </div>;

export default Dashboard;