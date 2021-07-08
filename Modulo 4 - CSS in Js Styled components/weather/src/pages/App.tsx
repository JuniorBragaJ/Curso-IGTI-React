import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CityEntity } from '../api/Entities/EntityesDefinition';
import CitySearch from '../molecules/CitySearch.component';
import '../styles/colors.styles.css'

function App() {
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
        <>
        <CitySearch/>
        </>
      </QueryClientProvider>
  );
}

export default App;
