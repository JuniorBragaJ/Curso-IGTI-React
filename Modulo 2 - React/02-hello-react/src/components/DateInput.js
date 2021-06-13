export default function DateInput({
    labelDescription = "Descrição do input",
    inputValue = "Valor padrão do input",
    onInputChange = null,
    id = "id_do_input_date"
}) {
    function handleInputChange ({currentTarget}) {
        if (onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{labelDescription}</label>
            
            <input 
              id={id}
              className="border-2 rounded-full w-1/3 text-center" 
              type ="date"
              value={inputValue}
              onChange={handleInputChange}/>
        </div>
    )
}