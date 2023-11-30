import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from './Project/Slider/Slider';
import List from './Project/List';
import Resume from './Project/Resume';
import Drama from './Project/Drama';
import LayoutHeader from './Project/LayoutHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
const _title = ['slider', 'list', 'resume', 'drama'];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutHeader menu={_title} />

      <Routes>
        <Route path='/slider' element={<Slider />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/drama' element={<Drama />}/>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();