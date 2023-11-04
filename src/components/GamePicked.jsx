import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { gameActions } from '../store/game';

import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';
import IconPlaceholder from '../images/house-pick-placeholder.png';

const GamePicked = () => {
  const dispatch = useDispatch();
  const playerChoice = useSelector(
    (state) => state.game.currentGame.playerChoice
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(gameActions.setStage({ stage: 'result' }));
      dispatch(gameActions.setWinner());
    }, 1000);
  }, []);

  return (
    <div className='flex justify-between max-w-[375px] mx-auto mb-[230px] md:max-w-[700px]'>
      <div className='text-center'>
        <p className='text-white uppercase text-[24px] leading-[32px] hidden md:block mb-[63px]'>
          You picked
        </p>

        {playerChoice === 'rock' && (
          <img
            className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
            src={IconRock}
            alt=''
          />
        )}

        {playerChoice === 'scissors' && (
          <img
            className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
            src={IconScissors}
            alt=''
          />
        )}

        {playerChoice === 'paper' && (
          <img
            className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
            src={IconPaper}
            alt=''
          />
        )}
        <p className='text-white uppercase text-[15px] leading-[32px] md:hidden'>
          You picked
        </p>
      </div>
      <div className='text-center'>
        <p className='text-white uppercase text-[24px] leading-[32px] hidden md:block mb-[63px]'>
          The house picked
        </p>
        <img
          className='block mx-auto mb-[29px] mt-[16px] w-[110px] md:w-[225px] md:mt-[97px]'
          src={IconPlaceholder}
          alt=''
        />
        <p className='text-white uppercase text-[15px] leading-[32px] md:hidden'>
          The house picked
        </p>
      </div>
    </div>
  );
};

export default GamePicked;
