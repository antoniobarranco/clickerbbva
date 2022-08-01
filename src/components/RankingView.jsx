import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GetAllUsers } from '../helpers/UserLogic';
import BreadCrumbs from './ui/BreadCrumbs';
import RankingViewRow from './RankingViewRow';

function RankingView() {

  const usuarios =  GetAllUsers();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <BreadCrumbs Text="Ranking" handleExit={handleBack} />

      <div className="d-grid gap-2 col-8  my-5 mx-auto">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center active">
              Game Ranking
          </li>

          {
            usuarios.map( usuario => (
              <RankingViewRow user={ usuario.user } score={ usuario.score } key={ usuario.user } />
            ))
          }

        </ul>
      </div>

    </>
  );
}

export default RankingView;
