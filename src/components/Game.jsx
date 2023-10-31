import { useSelector } from 'react-redux';

import GameInitial from './GameInitial';
import GamePicked from './GamePicked';
import GameResult from './GameResult';

const Game = () => {
  const stage = useSelector((state) => state.game.currentGame.stage);

  return (
    <div className='w-full'>
      {stage === 'initial' && <GameInitial />}
      {stage === 'picked' && <GamePicked />}
      {stage === 'result' && <GameResult />}
    </div>
  );
};

export default Game;
