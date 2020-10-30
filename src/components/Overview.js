import React from 'react';
import HCard from './HCard';

class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='users' backgroundColor='tealBG' label='Moradores' number={42356} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='tags' backgroundColor='pinkBG' label='Total de solicitações' number={1256} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='shopping-cart' backgroundColor='amberBG' label='Solicitações a atender' number={178356} />
          </div>
          <div className='col-sm-3 '>
            <HCard iconName='bar-chart' backgroundColor='cyanBG' label='Solicitações já atendidas' number={85}  />
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;