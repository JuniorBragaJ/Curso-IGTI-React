export default function TextInput({
    labelDescription = "Descrição do inout",
    inputValue = "Valor padrão do input",
    onInputChange = null,
}) {
    function handleInputChange ({currentTarget}) {
        if (onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue);
        }
    }
    return (
        <div className="flex flex-col">
            <label htmlFor="inputName">{labelDescription}</label>
            
            <input 
              id="inputName"
              className="border-2 rounded-full w-1/3 text-center" 
              type ="text"
              value={inputValue}
              onChange={handleInputChange}/>
        </div>
    )
}