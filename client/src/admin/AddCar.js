import React from 'react';
import useForm from '../components/lib/useForm';
import { withRouter } from 'react-router-dom';
import withAuth from '../components/withAuth';

import Error from '../components/lib/Error';
import { GET_ALL_CAR, ADD_CAR } from '../queries';
import { useMutation } from '@apollo/client';

import './AddCarStyle.css';

const AddCar = ({ history }) => {
  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    description: '',
    category: 'sedan',
    model: '',
    isAvailable: 'yes',
    seat: '2',
    age: '20',
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

  const Form = () => (
    <div className='formbox'>
      <form onSubmit={(e) => handleSubmit(e, addCar)} className='Form'>
        <table>
          <thead>
            <tr>
              <th>Car Adding Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='front'>
                <label htmlFor='brand'>Brand Name</label>
              </td>
              <td>
                <input
                  type='text'
                  className='back'
                  name='brand'
                  value={inputs.brand}
                  onChange={handleChange}
                  placeholder='Brand Name'
                />
              </td>
            </tr>
            <tr>
              <td className='front'>
                <label>Model Name</label>
              </td>
              <td>
                <input
                  type='text'
                  name='model'
                  className='back'
                  value={inputs.model}
                  onChange={handleChange}
                  placeholder='Model Name'
                />
              </td>
            </tr>
            <tr>
              <td className='front'>
                <label>Price</label>
              </td>
              <td>
                <input
                  type='text'
                  name='price'
                  className='back'
                  value={inputs.price}
                  onChange={handleChange}
                  placeholder='Price'
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>NO of sests</label>
              </td>
              <td>
                <select>
                  <option value='2'>2</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>Category</label>
              </td>
              <td>
                <select
                  name='category'
                  onChange={handleChange}
                  value={inputs.category}
                >
                  <option value='sedan'>sedan</option>
                  <option value='suv'>suv</option>
                  <option value='hatchbag'>hatchbag</option>
                  <option value='coupe'>coupe</option>
                  <option value='convertible'>convertible</option>
                  <option value='convertible'>pickup</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>Age</label>
              </td>
              <td>
                <select name='age' onChange={handleChange} value={inputs.age}>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25+</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>Availability</label>
              </td>
              <td>
                <select>
                  <option value='yes'>yes</option>
                  <option value='no'>no</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>AC</label>
              </td>
              <td>
                <select>
                  <option value='yes'>yes</option>
                  <option value='no'>no</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className='front'>Discriptions</label>
              </td>
              <td>
                <textarea
                  type='text'
                  name='description'
                  value={inputs.description}
                  onChange={handleChange}
                  placeholder='Description'
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  type='submit'
                  className='button-primary'
                  disabled={loading || validateForm()}
                >
                  Add Car
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {error && <Error error={error} />}
    </div>
  );

  return <Form />;
};

export default withAuth((session) => session)(withRouter(AddCar));
