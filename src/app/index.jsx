import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.css';
import { MainPage } from '../pages/Main';
import { ProfilePage } from '../pages/Profile';
import { LoginPage } from '../pages/SignIn';
import { NotFoundPage } from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />

      <Route path='/:id' element={<ProfilePage />} />

      {/* <Route path= 'signup' element={< RegisterPage />}/> */}

      <Route path='/signin' element={<LoginPage />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
