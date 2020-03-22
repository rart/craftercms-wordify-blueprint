import React, { Suspense } from 'react';
import Router from './Router';
import CircularProgressSpinner from './CircularProgressSpinner';
import { GlobalContextProvider } from './context';
import AppIntl from './AppIntl';

export default function App() {
  return (
    <GlobalContextProvider>
      <AppIntl>
        <Suspense
          fallback={
            <CircularProgressSpinner />
          }
        >
          <Router />
        </Suspense>
      </AppIntl>
    </GlobalContextProvider>
  );
}
