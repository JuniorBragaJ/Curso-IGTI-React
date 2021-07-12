import { useAtom } from "jotai";
import { useState } from "react"
import { useQuery } from "react-query"
import { citiesQuery, fetchCities } from "../api"
import { CityEntity } from "../api/Entities/EntityesDefinition"
import { citiesAtom } from '../global';

const useSearch = () => {
    const {isFetching, data, error} = useQuery<CityEntity[]> (citiesQuery(),() => fetchCities())
    const [cities, setCities] = useAtom(citiesAtom)

    const filterCities = (name:string) => {
        if (name.length <= 3){
            setCities([]);
            return;
        }
        const list = data ? 
        data.filter(item => item.name.toLocaleUpperCase().indexOf(name.toLocaleUpperCase()) >= 0)
        : [];
        setCities(list)
    }
    return{isFetching, data, error, filterCities, cities} 
}

export default useSearch;