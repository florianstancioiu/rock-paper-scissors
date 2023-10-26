const Score = () => {
  return (
    <div className='flex justify-between border-[3px] border-primary-border rounded-[5px] text-white mb-[105px]'>
      <div className='p-[24px] uppercase font-bold text-xl leading-4'>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className='p-[12px]'>
        <div className='p-[10px] w-[80px] bg-gradient-linear rounded-[4px] text-secondary text-center'>
          <p className='text-ternary uppercase text-[10px]'>Score</p>
          <p className='leading-[40px] text-[40px]'>12</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
