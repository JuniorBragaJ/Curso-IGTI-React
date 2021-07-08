import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fetchCities from '../api';
import { CityEntity } from '../api/Entities/EntityesDefinition';
import CitySearch from '../molecules/CitySearch.component';
import '../styles/colors.styles.css'

function App() {
  const [cities, setCities] = useState<CityEntity[]>([]);
  useEffect( () => {
    fetchCities().then(response => setCities(response))
  }, [])

  return (
      cities
      .filter(city => city.name==="Belo Horizonte")
      .map(city => <div>{city.name}</div>)
  );
}

export default App;
