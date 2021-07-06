import React from 'react';
import styled from 'styled-components'
import SearchIcon from '../SVG/SearchIcon.component';
import { useState } from 'react';

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
    heigth: 1rem;
    margin-right: -3.0rem;
    background-color: ${({error}) => `${ error ? `var(--primary)` : `var(--grey-dark-3)`}`};
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
    return (<SearchBar>
                <SearchInput   
                    value= {name} 
                    onChange={(e) => setName(e.target.value)}
                    error= {!found} />
                <SearchIcon/>
        </SearchBar>)
}

export default InputSearch;