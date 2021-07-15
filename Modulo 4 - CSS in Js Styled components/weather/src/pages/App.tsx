import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import WeatherDisplay from '../atoms/weatherDisplay.component';
import CitySearch from '../molecules/CitySearch.component';
import '../styles/colors.styles.css'
import styled, {ThemeProvider} from 'styled-components';
import ThemeSwitch from '../atoms/ThemeSwitch.component';
import { useAtom } from 'jotai';
import {themeAtom} from '../global';
import { LightTheme, DarkTheme } from '../themes';




const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
  background-color : ${({theme}) => theme.background};
`

const AppContainer =styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${({theme}) => theme.background};
`

const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin: auto;
`


function App() {
  const queryClient = new QueryClient()
  const [theme] = useAtom(themeAtom);
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme === 'dark'? DarkTheme : LightTheme}>
          <AppContainer>
            <Container>
              <ThemeSwitch/>
              <div><CitySearch/></div>
              <ContainerWeatherDisplay>
                <WeatherDisplay/>
              </ContainerWeatherDisplay>
            </Container>
          </AppContainer>
        </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
