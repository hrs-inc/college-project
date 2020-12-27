import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import useForm from '../components/lib/useForm';
import Layout from '../core/Layout';
import { GET_ALL_CATEGORY, ADD_CAR } from '../queries';

const AddCar = ({session, history}) => {
  const { data, error, loading } = useQuery(GET_ALL_CATEGORY);

  const {inputs, handleChange,  clearForm} = useForm({
    brand: '',
    description: '',
    categories: '',
    category: '',
    photo: '',
    createdCar: '',
    redirectToProfile: false,
    formData: '',
    age: 20,
    ac: '',
    isAvailable: '',
    seat: '',
    username: session.authUserProfile.username
  })

  const updateCache = (cache, {data: {addCar}})


  const [addCar, {error, loading}] = useMutation(ADD_CAR, {
    variables: inputs,
    update: updateCache,
    refetchQueries: () => [
      {query: GET_ALL_CATEGORY, variables: {
        username: session.authUserProfile.username
      }}
    ]
  })



  const {
    brand,
    description,
    categories,
    category,
    createdCar,
    redirectToProfile,
    formData,
    ac,
    age,
    isAvailable,
    seat,
  } = values;

  const init = () => {
    data.getAllCategory().then(({ data }) => {
      setValues({ ...values, categories: data, formData: new FormData() });
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };


  const newPostForm = ()





};
