import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';
import CityList from './CityList.component';
import {citiesAtom} from '../global';
import { useAtom } from 'jotai';

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
    const [cities] = useAtom(citiesAtom);
    return <Container>
                <InputSearch found={cities.length > 0}/>
                <CityList />
        </Container>
}

export default CitySearch;