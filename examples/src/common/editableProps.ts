import { TEditableProps } from '@humandx/plate';
import { MyValue } from '../typescript/plateTypes';

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Type…',
};
