const PlayAgain = ({ onPlayAgain, matchResult = 'You win' }) => {
  return (
    <div className='max-w-[375px] mx-auto text-center mb-[52px] mt-[62px]'>
      <p className='text-white text-[56px] mb-[16px] uppercase'>
        {matchResult}
      </p>
      <button
        onClick={onPlayAgain}
        className='bg-white uppercase rounded-[8px] px-[60px] py-[16px] leading-[2.5px]'
      >
        play again
      </button>
    </div>
  );
};

export default PlayAgain;
