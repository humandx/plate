import React, { ReactNode } from 'react';
import { SuggestionProvider } from '@humandx/plate';
import { suggestionsData, usersData } from './constants';

export const MySuggestionProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SuggestionProvider
      suggestions={suggestionsData}
      users={usersData}
      myUserId="1"
    >
      {children}
    </SuggestionProvider>
  );
};
