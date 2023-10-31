import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../store/game';

import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';

const GameInitial = () => {
  const dispatch = useDispatch();
  const choiceClickHandler = (choice) => {
    dispatch(gameActions.setPlayerChoice({ choice }));
    dispatch(gameActions.setStage({ stage: 'picked' }));
    dispatch(gameActions.setPcChoice());
  };

  return (
    <div className='max-w-[312px] mx-auto bg-game-image bg-no-repeat bg-size-[90%] bg-center mb-[140px]'>
      <div className='flex justify-between'>
        <img
          src={IconPaper}
          alt='Icon Paper'
          onClick={() => choiceClickHandler('paper')}
          className='cursor-pointer hover:scale-110 transition-transform'
        />
        <img
          src={IconScissors}
          alt='Icon Scissors'
          onClick={() => choiceClickHandler('scissors')}
          className='cursor-pointer hover:scale-110 transition-transform'
        />
      </div>
      <div className='flex justify-center'>
        <img
          src={IconRock}
          alt='Icon Rock'
          onClick={() => choiceClickHandler('rock')}
          className='cursor-pointer hover:scale-110 transition-transform'
        />
      </div>
    </div>
  );
};

export default GameInitial;
