import { useMutation, useQuery } from '@apollo/client';

import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { ADD_CATEGORY, GET_CURRENT_USER } from '../queries';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data, error, loading } = useQuery(GET_CURRENT_USER);

  const [addCategory] = useMutation(ADD_CATEGORY, {
    variables: { name },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const handleSubmit = (e, addCategory) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    addCategory().then(({ data }) => {
      console.log(data);
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={(e) => handleSubmit(e, addCategory)}>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          className='form-control'
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className='btn btn-outline-primary'>Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className='text-success'>{name} is created</h3>;
    }
  };

  const goBack = () => (
    <div className='mt-5'>
      <Link to='/admin/dashboard' className='text-warning'>
        Back to dashboard
      </Link>
    </div>
  );
  return (
    <div>
      <Layout
        title='Add a  category'
        description={`G'day ${user.name}, ready to add a new category?`}
      />

      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
