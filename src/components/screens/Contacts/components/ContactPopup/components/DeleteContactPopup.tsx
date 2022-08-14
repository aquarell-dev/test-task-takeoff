import { FC } from 'react';
import Popup from '../../../../../ui/Popup';
import { IContactPopup } from '../../../../../../store/contacts/types';
import Button from '../../../../../ui/Button';

interface IDeleteContactPopup extends IContactPopup {
  handler: () => void;
  errorMessage: string;
}

const DeleteContactPopup: FC<IDeleteContactPopup> = ({ errorMessage, heading, setValue, value, handler }) => {
  return (
    <Popup heading={heading} setVisible={setValue} visible={value}>
      <div className='flex space-x-4'>
        <p className={'text-sm text-red-500'}>{errorMessage}</p>
        <Button text={'Yes, let us go!'} twSizes='w-40' color={'green'} handler={handler} />
        <Button text={'No, take me back'} twSizes='w-40' color={'red'} handler={() => setValue(false)} />
      </div>
    </Popup>
  );
};

export default DeleteContactPopup;
