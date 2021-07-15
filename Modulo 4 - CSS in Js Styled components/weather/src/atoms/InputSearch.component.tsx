import React, { useEffect } from 'react';
import styled from 'styled-components'
import SearchIcon from '../SVG/SearchIcon.component';
import { useState } from 'react';
import useSearch from '../lib/UseSearch';

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    margin: auto; 
    margin-bottom: 2rem;
`;

interface SearchInputProps {
    error: boolean;
}

const SearchInput= styled.input<SearchInputProps>`
    width: 80%;
    border-radius: 100px;
    height: 1rem;
    margin-right: -3.0rem;
    background-color: ${({error, theme}) => `${ error ? theme.error : theme.secondary}`};
    border: ${({theme}) => theme.secondary} solid 2px;
    padding: .75rem 2rem; 
    outline: none;
    transition: 1s;
    &:focus {
        width: 100%;
    }
`

interface InputSearchProps {
    found: boolean;
}


const InputSearch:React.FC<InputSearchProps> = ({found}) => {
    const [name,setName] = useState('');
    const {filterCities} = useSearch();
    
    useEffect(() => {
        filterCities(name)
    },[name])

    return (<SearchBar>
                <SearchInput   
                    value= {name} 
                    onChange={(e) => setName(e.target.value)}
                    error= {!found} />
                <SearchIcon/>
        </SearchBar>)
}

export default InputSearch;