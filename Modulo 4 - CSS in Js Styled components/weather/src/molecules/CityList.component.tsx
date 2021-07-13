import React from "react"
import CityTag from "../atoms/CityTag.component"
import { useAtom } from "jotai";
import { checkedCityAtom, citiesAtom } from "../global";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`


const CityList = () => {
    const [cities] = useAtom(citiesAtom);
    const [checkedCity, setCheckedCity] = useAtom(checkedCityAtom)

    const onClick = (id:number) => {
        setCheckedCity(id);
    }

    return (
        <Container>
            {cities.map(city => (
            <CityTag 
            onClick={() => onClick(city.id)} 
            checked={checkedCity===city.id}
            name={city.name}/>)
            )}
        </Container>
    )
}

export default CityList;