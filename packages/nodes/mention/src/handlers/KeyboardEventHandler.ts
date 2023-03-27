import { KeyboardEvent } from 'react';
import { HandlerReturnType } from '@humandx/plate-common';

// TODO: move to core
export type KeyboardEventHandler = (event: KeyboardEvent) => HandlerReturnType;
