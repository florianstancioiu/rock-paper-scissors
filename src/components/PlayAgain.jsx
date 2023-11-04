import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../store/game';

const PlayAgain = () => {
  const dispatch = useDispatch();
  const playerWinner = useSelector(
    (state) => state.game.currentGame.playerWinner
  );
  const matchResult = playerWinner ? 'You win' : 'You lose';

  const playAgainClickHandler = () => {
    dispatch(gameActions.resetCurrentGame());
  };

  return (
    <div className='max-w-[375px] mx-auto text-center mb-[34px] mt-[62px] md:relative md:top-[-290px]'>
      <p className='text-white text-[56px] mb-[16px] uppercase'>
        {matchResult}
      </p>
      <button
        onClick={playAgainClickHandler}
        className='bg-white uppercase rounded-[8px] px-[60px] py-[16px] leading-[2.5px]'
      >
        play again
      </button>
    </div>
  );
};

export default PlayAgain;
