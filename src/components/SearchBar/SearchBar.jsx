import './SearchBar.css'

// ¿eres capaz de imaginar una barra de búsqueda?
export default function SearchBar({name, type, handleGetValue}){

    
    
    return(
        <>
            <input className='inp__search' name={name} type={type} onChange={handleGetValue}/>
        </>
    )
}