import React from 'react';
import useForm from '../lib/useForm';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';

import Error from '../lib/Error';
import { GET_ALL_CAR, ADD_CAR } from '../../queries';
import { useMutation } from '@apollo/client';

import './AddCarStyle.css';

const AddCar = ({ history }) => {
  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    description: '',
    category: '',
    model: '',
    isAvailable: '',
    seat: '',
    age: '',
    price: '',
    ac: '',
  });

  const updateCache = (cache, { data: { addCar } }) => {
    const { getAllCars } = cache.readQuery({ query: GET_ALL_CAR });
    cache.writeQuery({
      query: GET_ALL_CAR,
      data: {
        getAllCars: getAllCars.concat([addCar]),
      },
    });
  };

  const [addCar, { error, loading }] = useMutation(ADD_CAR, {
    variables: inputs,
    update: updateCache,
  });

  const {
    brand,
    description,
    category,
    model,
    isAvailable,
    seat,
    age,
    price,
    ac,
  } = inputs;

  const handleSubmit = (e, addCar) => {
    e.preventDefault();
    addCar().then(() => {
      clearForm();
      history.push('/');
    });
  };

  const validateForm = () => {
    const {
      brand,
      description,
      category,
      model,
      isAvailable,
      seat,
      age,
      price,
      ac,
    } = inputs;
    const isInvalid =
      !brand ||
      !description ||
      !model ||
      !category ||
      !isAvailable ||
      !seat ||
      !ac ||
      !age ||
      !price;
    return isInvalid;
  };

  return (
    <div className='all'>
      <h2 className='heading'>Add Car</h2>
      <form>
        <div>
          <input
            type='text'
            name='brand'
            value={brand}
            onChange={handleChange}
            className='input'
            placeholder='brand name'
          />
        </div>
        <div>
          <input
            type='text'
            name='model'
            value={model}
            onChange={handleChange}
            placeholder='Model Name'
            className='input'
          />
        </div>
        <div>
          <input
            type='text'
            name='price'
            value={price}
            onChange={handleChange}
            placeholder='Price'
            className='input'
          />
        </div>

        <div>
          <input
            type='text'
            name='seat'
            value={seat}
            onChange={handleChange}
            placeholder='No of seats'
            className='input'
          />
        </div>

        <div>
          <select
            name='category'
            className='select'
            onChange={handleChange}
            value={category}
          >
            <option>please select car category</option>
            <option value='sedan'>sedan</option>
            <option value='suv'>suv</option>
            <option value='hatchbag'>hatchbag</option>
            <option value='coupe'>coupe</option>
            <option value='convertible'>convertible</option>
            <option value='convertible'>pickup</option>
          </select>
        </div>
        <div>
          <select
            name='age'
            className='select'
            onChange={handleChange}
            value={age}
          >
            <option>please select age</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
          </select>
        </div>
        <div>
          <select
            name='isAvailable'
            className='select'
            onChange={handleChange}
            value={isAvailable}
          >
            <option>please select ac availability</option>
            <option value='yes'>yes</option>
            <option value='no'>no</option>
          </select>
        </div>
        <div>
          <select
            name='ac'
            className='select'
            onChange={handleChange}
            value={ac}
          >
            <option>please select ac availability</option>
            <option value='yes'>yes</option>
            <option value='no'>no</option>
          </select>
        </div>
        <div>
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='Description'
            className='textarea'
          />
        </div>
        <div>
          <button
            type='submit'
            className='button-primary'
            onClick={(e) => handleSubmit(e, addCar)}
            disabled={loading || validateForm()}
          >
            Add Car
          </button>
        </div>
      </form>
      {error && <Error error={error} />}
    </div>
  );
};

export default withAuth((session) => session)(withRouter(AddCar));

// export default withRouter(AddCar);
