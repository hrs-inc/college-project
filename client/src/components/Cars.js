import React from 'react';
import CarItem from './CarItem';
import './Car.css';
// import { gql, useQuery } from '@apollo/client';

const Cars = () => {
  return (
    <div className='cards'>
      <h1>Check out Recent Imported Models</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CarItem
              src='images/T3bdc4539U.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='sedan'
              path='/sedan/cars'
            />
            <CarItem
              src='images/tNHeWkCVBr.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='convertible'
              path='/products'
            />
            <CarItem
              src='images/owKsJpxQMy.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='hatchbag'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CarItem
              src='images/bIBwtlieZU.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='coupe'
              path='/services'
            />
            <CarItem
              src='images/4fOA1olTnP.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='suv'
              path='/products'
            />
            <CarItem
              src='images/eJfSKUCGFS.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='pickup'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cars;
