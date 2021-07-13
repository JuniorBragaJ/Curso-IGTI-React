import { useAtom } from "jotai"
import { useQuery } from "react-query"
import { WeatherData } from "../api/Entities/EntityesDefinition"
import { weatherQuery } from "../api/queries"
import { checkedCityAtom } from "../global"

const useWeatherDisplay = () => {
    const [cityChecked] = useAtom(checkedCityAtom)
    const url = `http://api.openweathermap.org/2.5/weather?id=${cityChecked}&units=metric&lang=pt_br&appid=d363a18c24dddb7f93f48ef46ef4324c`
    const {isFetching, data} = useQuery<WeatherData>(weatherQuery(cityChecked as number), () => 
        fetch(url)
        .then(response => response.json())
    )

    return {isFetching, data}
}

export default useWeatherDisplay;