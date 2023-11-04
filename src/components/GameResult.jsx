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
  const playerWinner = useSelector(
    (state) => state.game.currentGame.playerWinner
  );

  const playerWinnerBorderClasses = playerWinner
    ? 'rounded-full shadow-winner'
    : '';
  const pcWinnerBorderClasses = !playerWinner
    ? 'rounded-full shadow-winner'
    : '';

  return (
    <div>
      <div className='flex justify-between max-w-[375px] mx-auto md:max-w-[936px]'>
        <div className='text-center'>
          <p className='text-white uppercase text-[24px] leading-[32px] hidden md:block mb-[63px]'>
            You picked
          </p>
          <div className={playerWinnerBorderClasses}>
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
          </div>
          <p className='text-white uppercase text-[15px] leading-[32px] md:hidden'>
            You picked
          </p>
        </div>
        <div className='text-center'>
          <p className='text-white uppercase text-[24px] leading-[32px] hidden md:block mb-[63px]'>
            The house picked
          </p>
          <div className={pcWinnerBorderClasses}>
            {pcChoice === 'scissors' && (
              <img
                className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
                src={IconScissors}
                alt=''
              />
            )}

            {pcChoice === 'rock' && (
              <img
                className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
                src={IconRock}
                alt=''
              />
            )}

            {pcChoice === 'paper' && (
              <img
                className='block mx-auto mb-[17px] w-[130px] md:w-[293px]'
                src={IconPaper}
                alt=''
              />
            )}
          </div>

          <p className='text-white uppercase text-[15px] leading-[32px] md:hidden'>
            The house picked
          </p>
        </div>
      </div>
      <PlayAgain />
    </div>
  );
};

export default GameResult;
