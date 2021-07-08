import cities from './Entities/city.json'
import { CityEntity } from './Entities/EntityesDefinition';

const fetchCities = async () => {
    return JSON.parse(JSON.stringify(cities));
}

export default fetchCities;