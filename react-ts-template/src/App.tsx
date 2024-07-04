import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import CharacterDetail from './pages/CharacterDetail';
import './styles/global.scss';

const App: React.FC = () => {
  const routes = useRoutes([
    { path: '/characters', element: <Characters /> },
    { path: '/comics', element: <Comics /> },
    { path: '/characters/:id', element: <CharacterDetail /> },
    { path: '/', element: <Characters />, index: true },
  ]);

  return (
    <div>
      <Header />
      <main>{routes}</main>
      <Footer />
    </div>
  );
};

export default App;
