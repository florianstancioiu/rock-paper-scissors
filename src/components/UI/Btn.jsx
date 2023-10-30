const Btn = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='block mx-auto uppercase text-white text-[16px] border-white border-[1px] rounded-[8px] py-[10px] px-[36px]'
    >
      {title}
    </button>
  );
};

export default Btn;
