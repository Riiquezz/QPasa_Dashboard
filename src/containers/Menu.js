import React from 'react';

import MenuItem from '../components/MenuItem';

class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>QPasa</h2>
        </div>
        <ul>
          <MenuItem link='/' linkText='Visão geral' iconName='tachometer' />
          <MenuItem link='/customers' linkText='Moradores' iconName='group' />
          <MenuItem link='/analytics' linkText='Analytics' iconName='bar-chart' />

        </ul> 
      </div>
      
    );
  }
}

export default Menu;