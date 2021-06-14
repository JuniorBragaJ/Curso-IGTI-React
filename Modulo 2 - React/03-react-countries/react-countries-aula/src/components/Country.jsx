import Item from './Item'


export default function Country({
    children: country = null, 
    onCountryClick = null,
    isVisited = false,
}) {
    
    if(!country) {
        return <div>Impossivel renderizar o pais</div>
    }

    function handleCountryClick(){
        if(onCountryClick) {
            onCountryClick(country.id);
        }
    }

    const demographDensity = country.population / country.area;
    const {flag, name, capital, region, population, area} = country //Extrai todas as infos dentro de coutry, 
                                                                    //Sendo assim não precisa ficar usando "country.area" por exemplo
                                                                    //É só colocar area aonde precisar

    const isVisitedClassName = isVisited ? 'bg-green-100' : ''

    return (
        <div className={`border p-2 m-2 flex flex-row items-center space-x-2 ${isVisitedClassName}`} 
             onClick={handleCountryClick}>
            <img className="w-48" src={flag} alt={name} />
            <ul>
                <li>
                    <Item label="País: ">{name}</Item>
                </li>
                <li>
                    <Item label="Capital: ">{capital}</Item>
                </li>
                <li>
                    <Item label="Região: ">{region}</Item>
                </li>
                <li>
                    <Item label="População:  ">{population}</Item>
                </li>
                <li>
                    <Item label="Área:  ">{area}</Item>
                </li>
                <li>
                    <Item label="Densidade demográfica:  ">{demographDensity.toFixed(1)}</Item>
                </li>
                
            </ul>
        </div>
    )
}