import IconPaper from '../images/icon-paper.png';
import IconScissors from '../images/icon-scissors.png';
import IconRock from '../images/icon-rock.png';
import IconPlaceholder from '../images/house-pick-placeholder.png';

const GamePicked = () => {
  return (
    <div className='flex justify-between max-w-[375px] mx-auto'>
      <div className='text-center'>
        <img className='block mx-auto mb-[17px]' src={IconRock} alt='' />
        <p className='text-white uppercase text-[15px] leading-[32px]'>
          You picked
        </p>
      </div>
      <div className='text-center'>
        <img
          className='block mx-auto mb-[25px] mt-[16px]'
          src={IconPlaceholder}
          alt=''
        />
        <p className='text-white uppercase text-[15px] leading-[32px]'>
          The house picked
        </p>
      </div>
    </div>
  );
};

export default GamePicked;
