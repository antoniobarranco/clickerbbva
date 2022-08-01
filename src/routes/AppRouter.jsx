import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LoginView from '../components/LoginView';
import GameView from '../components/GameView';
import RankingView from '../components/RankingView';

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Header />

      <main>

        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/game" element={<GameView />} />
          <Route path="/ranking" element={<RankingView />} />
          <Route path="/*" element={<LoginView />} />
        </Routes>

      </main>

      <Footer />

    </BrowserRouter>

  );
}

AppRouter.propTypes = {};

export default AppRouter;
