import { createPortal } from 'react-dom';
import RulesImg from '../images/rules.png';
import CloseIcon from '../images/close.png';

const Rules = ({ onCloseClick }) => {
  return createPortal(
    <div className='min-w-[100%] bg-white min-h-screen absolute top-0 left-[50%] translate-x-[-50%]'>
      <div className='max-w-[375px] pt-[95px] mx-auto text-center'>
        <p className='text-rules uppercase font-bold text-[32px] leading-[32px] mb-[115px]'>
          rules
        </p>
        <img
          src={RulesImg}
          alt='The rules of the game'
          className='block mx-auto mb-[155px]'
        />
        <img
          onClick={onCloseClick}
          src={CloseIcon}
          alt=''
          className='block mx-auto mb-[65px] cursor-pointer'
        />
      </div>
    </div>,
    document.querySelector('#root-rules')
  );
};

export default Rules;
