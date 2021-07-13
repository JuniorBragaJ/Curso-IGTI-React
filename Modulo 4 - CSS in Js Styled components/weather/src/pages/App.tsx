import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CityEntity } from '../api/Entities/EntityesDefinition';
import WeatherDisplay from '../atoms/weatherDisplay.component';
import CitySearch from '../molecules/CitySearch.component';
import '../styles/colors.styles.css'
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding-top: 1rem;
`

const AppContainer =styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`

const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin: auto;
`


function App() {
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <Container>
            <div><CitySearch/></div>
            <ContainerWeatherDisplay>
              <WeatherDisplay/>
            </ContainerWeatherDisplay>
          </Container>
        </AppContainer>
      </QueryClientProvider>
  );
}

export default App;
