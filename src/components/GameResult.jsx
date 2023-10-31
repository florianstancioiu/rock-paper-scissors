import { useSelector } from 'react-redux';
import PlayAgain from './PlayAgain';

import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';

const GameResult = () => {
  const playerChoice = useSelector(
    (state) => state.game.currentGame.playerChoice
  );
  const pcChoice = useSelector((state) => state.game.currentGame.pcChoice);

  return (
    <div>
      <div className='flex justify-between max-w-[375px] mx-auto'>
        <div className='text-center'>
          {playerChoice === 'rock' && (
            <img className='block mx-auto mb-[17px]' src={IconRock} alt='' />
          )}

          {playerChoice === 'scissors' && (
            <img
              className='block mx-auto mb-[17px]'
              src={IconScissors}
              alt=''
            />
          )}

          {playerChoice === 'paper' && (
            <img className='block mx-auto mb-[17px]' src={IconPaper} alt='' />
          )}
          <p className='text-white uppercase text-[15px] leading-[32px]'>
            You picked
          </p>
        </div>
        <div className='text-center'>
          {pcChoice === 'scissors' && (
            <img
              className='block mx-auto mb-[17px]'
              src={IconScissors}
              alt=''
            />
          )}

          {pcChoice === 'rock' && (
            <img className='block mx-auto mb-[17px]' src={IconRock} alt='' />
          )}

          {pcChoice === 'paper' && (
            <img className='block mx-auto mb-[17px]' src={IconPaper} alt='' />
          )}

          <p className='text-white uppercase text-[15px] leading-[32px]'>
            The house picked
          </p>
        </div>
      </div>
      <PlayAgain />
    </div>
  );
};

export default GameResult;
