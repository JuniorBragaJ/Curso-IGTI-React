import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';
import { useAtom } from 'jotai';
import { citiesAtom } from '../global'
import CityTag from '../atoms/CityTag.component';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-basis: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    padding-top: 5rem;

`;

const CitySearch = () => {
    const [cities] = useAtom(citiesAtom)
    return <Container>
                <InputSearch found={false}/>
                <div>
                    {cities.map(city => (<CityTag name={city.name}/>))}
                </div>
        </Container>
}

export default CitySearch;