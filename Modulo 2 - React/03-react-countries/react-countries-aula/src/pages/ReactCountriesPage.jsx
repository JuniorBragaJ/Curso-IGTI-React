import Header from '../components/Header'
import Main from '../components/Main'
import {allCountries} from '../data/countries'
import TextInput from '../components/TextInput'
import { useState } from 'react'
import Countries from '../components/Countries'
import Country from '../components/Country'


export default function ReactCountriesPage() {
    
    const[countryFilter, setCountryFilter] = useState('');
    const[visitedCountries, setVisitedCountries] = useState([]);
    
    function handleCountryFilterChange (newCountryFilter) {
        setCountryFilter(newCountryFilter)
    }

    function toggleVisitedCountry(countryId){
        let newVisitedCountries = [...visitedCountries]

        const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1 

        if(isCountryVisited){
            newVisitedCountries = 
                newVisitedCountries.filter(visitedCountryId => visitedCountryId !==countryId)
        }
        else{
            newVisitedCountries.push(countryId)
        }
        setVisitedCountries(newVisitedCountries)
    }

    const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

    const filteredCountries = 
    countryFilterLowerCase.length >= 3 
        ?   allCountries.filter(({ nameLowerCase }) => {
                return nameLowerCase.includes(countryFilterLowerCase);
        }) 
        : allCountries;

        
    return (
    <div>
        <Header>React Countries</Header>

        <Main>
            <TextInput 
            id="inputCountryFilter"
            labelDescription="Informce o nome do país (Com pelo menos 3 caracteres): "
            inputValue={countryFilter}
            onInputChange={handleCountryFilterChange}/>
            
            
            <Countries>
                <span className="text-center font-bold">{filteredCountries.length}  Paises</span>
                <span className="text-center font-bold">{visitedCountries.length}  Paises visitados</span>
        
                {filteredCountries.map(country => {
                    const isVisited = visitedCountries.indexOf(country.id) !== -1;
                
                    return <Country 
                    isVisited={isVisited} 
                    onCountryClick={toggleVisitedCountry} 
                    key={country.id}
                    >
                        {country}
                    </Country>
                })}
            </Countries>

        </Main>
    </div>
)}