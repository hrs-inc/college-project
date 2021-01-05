import React from 'react';
import useForm from '../components/lib/useForm';
import { withRouter } from 'react-router-dom';
import withAuth from '../components/withAuth';

import Error from '../components/lib/Error';
import { GET_ALL_CAR, ADD_CAR } from '../queries';
import { useMutation } from '@apollo/client';

const AddCar = ({ history }) => {
  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    description: '',
    category: 'sedan',
    model: '',
    isAvailable: 'yes',
    seat: '',
    age: '',
    price: '',
    ac: 'no',
  });

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

  const handleSubmit = (e, addCar) => {
    e.preventDefault();
    addCar().then(() => {
      clearForm();
      history.push('/');
    });
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={(e) => handleSubmit(e, addCar)}>
        <input
          type='text'
          name='brand'
          value={inputs.brand}
          onChange={handleChange}
          placeholder='Brand Name'
        />
        <input
          type='text'
          name='brand'
          value={inputs.model}
          onChange={handleChange}
          placeholder='Model Name'
        />
        <input
          type='text'
          name='price'
          value={inputs.price}
          onChange={handleChange}
          placeholder='Price'
        />

        <input
          type='text'
          name='seat'
          value={inputs.seat}
          onChange={handleChange}
          placeholder='No of seats'
        />

        <select name='category' onChange={handleChange} value={inputs.category}>
          <option value='sedan'>sedan</option>
          <option value='suv'>suv</option>
          <option value='hatchbag'>hatchbag</option>
          <option value='coupe'>coupe</option>
          <option value='convertible'>convertible</option>
          <option value='convertible'>pickup</option>
        </select>
        <select name='age' onChange={handleChange} value={inputs.age}>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
        </select>
        <select
          name='isAvailable'
          onChange={handleChange}
          value={inputs.isAvailable}
        >
          <option value='yes'>yes</option>
          <option value='no'>no</option>
        </select>
        <select name='ac' onChange={handleChange} value={inputs.ac}>
          <option value='yes'>yes</option>
          <option value='no'>no</option>
        </select>
        <textarea
          type='text'
          name='description'
          value={inputs.description}
          onChange={handleChange}
          placeholder='Description'
        />
        <button
          type='submit'
          className='button-primary'
          disabled={loading || validateForm()}
        >
          Add Car
        </button>
      </form>
      {error && <Error error={error} />}
    </div>
  );
};

export default withAuth((session) => session)(withRouter(AddCar));
