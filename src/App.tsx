import React from 'react';

import Index from './components/screens/Index';
import Contacts from './components/screens/Contacts';
import { Login, Register } from './components/screens/Auth';

import Layout from './components/layout/Layout';

import { Route, Routes } from 'react-router-dom';

import axios from 'axios';


axios.defaults.baseURL = 'https://62f278bbb1098f1508139d57.mockapi.io/api/v1/';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
  );
};

export default App;
