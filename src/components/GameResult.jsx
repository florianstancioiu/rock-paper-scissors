import PlayAgain from './PlayAgain';

import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';

const GameResult = () => {
  return (
    <div>
      <div className='flex justify-between max-w-[375px] mx-auto'>
        <div className='text-center'>
          <img className='block mx-auto mb-[17px]' src={IconRock} alt='' />
          <p className='text-white uppercase text-[15px] leading-[32px]'>
            You picked
          </p>
        </div>
        <div className='text-center'>
          <img className='block mx-auto mb-[17px]' src={IconScissors} alt='' />
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
