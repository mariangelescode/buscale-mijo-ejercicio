import { useState } from 'react'
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/Table/Table'
import getPeople from './utils/getPeople'

const users = getPeople();

function App() {

  // const [searchBar, setSearchBar] = useState({
  //   search : '',
  // })

  const [usersFilter, setUsersFilter] = useState(users);




  let handleGetValue = ( event ) => {
    const { value } = event.target
    // setSearchBar({[name]:value})
    // console.log(searchBar)
    // console.log(usersFilter.filter(element => element.firstName))
    // console.log(usersFilter.filter(element => element.firstName.includes(''+value+'')))
    setUsersFilter(usersFilter.filter(element => element.firstName.toLowerCase().includes(''+value.toLowerCase()+'')));
    if(!value){
      setUsersFilter(users);
    }

  }


  return (
    <>
    <Title />
    <SearchBar name={'search'} type={'type'} handleGetValue={handleGetValue}/>
    <Table>
      {usersFilter.map((user,i)=>{
        const isEven = i%2===0
        return (
          <>
            <p className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>
          </>
        )
      })}
    </Table>
    </>
  )
}

export default App
