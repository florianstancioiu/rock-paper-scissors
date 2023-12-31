import { useSelector } from 'react-redux';

const Score = () => {
  const score = useSelector((state) => state.game.score);

  return (
    <div className='flex justify-between border-[3px] border-primary-border rounded-[5px] text-white mb-[105px] md:max-w-[700px] md:mx-auto md:mb-[64px]'>
      <div className='p-[24px] uppercase font-bold text-xl leading-4 md:text-[36px] md:leading-[30px]'>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className='p-[12px]'>
        <div className='p-[10px] w-[80px] bg-gradient-linear rounded-[4px] text-secondary text-center md:w-[150px]'>
          <p className='text-ternary uppercase text-[10px] md:text-[16px]'>
            Score
          </p>
          <p className='leading-[40px] text-[40px] md:text-[64px] md:leading-[64px]'>
            {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Score;
