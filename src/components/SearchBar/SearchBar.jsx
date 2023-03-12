// ¿eres capaz de imaginar una barra de búsqueda?
export default function SearchBar({name, type, handleGetValue}){

    
    
    return(
        <>
            <input name={name} type={type} onChange={handleGetValue}/>
        </>
    )
}