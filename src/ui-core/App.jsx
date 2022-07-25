import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Requests } from '../data/index';
import { requests } from '../api/requests';
import axios from '../api/axios';
import { AppWrapper } from '../styled-components/index';
import Browse from '../routes/Browse';


export default function App() {
  return (
    <AppWrapper>
      <Requests.Provider value={{ requests, axios }}>
        <Routes>
          <Route exact path='/' element={<Browse />} />
        </Routes>
      </Requests.Provider>
    </AppWrapper>
  );
}
