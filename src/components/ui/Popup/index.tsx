import React, { FC, useRef } from 'react';
import { TSetter } from '../../../types/types';
import { cn } from '../../../utils';
import { useOutside } from '../../../hooks/useOutside';

interface IPopup {
  heading: string;
  children: React.ReactNode;
  setVisible: TSetter<boolean>;
  visible: boolean;
}

const Popup: FC<IPopup> = ({ heading, children, visible, setVisible }) => {
  return (
    <div
      className={cn(
        'fixed top-[50%] left-[50%] w-[500px] bg-gray-100 z-50 shadow-md -translate-x-[50%] -translate-y-[50%]',
        visible ? '' : 'hidden'
      )}
    >
      <div
        className='absolute cursor-pointer left-0 top-0 right-0 bottom-0 flex justify-end mr-2 my-1'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2} onClick={() => setVisible(false)}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div className='flex py-8 flex-col items-center'>
        <p className='text-3xl mb-4 text-center'>{heading}</p>
        {children}
      </div>
    </div>
  );
};

export default Popup;