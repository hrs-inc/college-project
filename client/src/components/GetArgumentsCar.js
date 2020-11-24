import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import { object } from 'yup';
// import { Link } from 'react-router-dom';

const GET_CAR = gql`
  # query GET_ARGUMENT_CARS($category: String)
  {
    getArgumentCars(category: "sedan") {
      id
      objectId
      brand
      category
      model
      isRent
    }
  }
`;

const GetArgumentsCar = ({ category }) => {
  const { loading, data, error } = useQuery(GET_CAR, {
    variables: { category },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h4>Error</h4>;

  // console.log(data.getArgumentCars);

  return data.getArgumentCars.map(({ objectId, id, model, brand }) => (
    <section id='store' className='store py-5' style={{ background: 'grey' }}>
      <div key={id} className='container'>
        <div className='row store-items' style={{}}>
          <div className='col-10 col-sm-6 col-lg-6 mx-auto my-3 store-item cars'>
            <div className='card single-item'>
              <div
                className='img-container'
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`/images/${objectId}.jpg`}
                  alt='cars'
                  className='img-fluid w-50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default GetArgumentsCar;
