import { FieldValues } from 'react-hook-form';
import { ISetter } from '../../types/types';

export interface IContact {
  name: string;
  phone: string;
  id?: number;
  userId: number;
}

export interface IContactPopup extends ISetter<boolean> {
  heading: string;
}

export interface IFormContactsInputs extends FieldValues {
  name: string;
  phone: string;
}