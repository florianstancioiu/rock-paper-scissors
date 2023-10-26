import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';

const Game = () => {
  return (
    <div className='w-full mb-[140px]'>
      <div className='w-[312px] mx-auto bg-game-image bg-no-repeat bg-size-[90%] bg-center'>
        <div className='flex justify-between'>
          <img src={IconPaper} alt='Icon Paper' className='cursor-pointer' />
          <img
            src={IconScissors}
            alt='Icon Scissors'
            className='cursor-pointer'
          />
        </div>
        <div className='flex justify-center'>
          <img src={IconRock} alt='Icon Rock' className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Game;
