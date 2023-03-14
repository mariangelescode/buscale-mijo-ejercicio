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




  // let handleGetValue = ( event ) => {
  //   const { value } = event.target
  //   // setSearchBar({[name]:value})
  //   // console.log(searchBar)
  //   // console.log(usersFilter.filter(element => element.firstName))
  //   // console.log(usersFilter.filter(element => element.firstName.includes(''+value+'')))
  //   const filterTable = usersFilter.filter(element => {
  //     const filterName = element.firstName.toLowerCase().includes(''+value.toLowerCase()+'')
  //     const filterLastName = element.lastName.toLowerCase().includes(''+value.toLowerCase()+'')
  //     const filterEmail = element.email.toLowerCase().includes(''+value.toLowerCase()+'')
  //     const filterAmount = element.amount.toLowerCase().includes(''+value.toLowerCase()+'')
  //     return filterName || filterLastName || filterEmail || filterAmount

  //   })
  //   setUsersFilter(filterTable);
  //   if(!value){
  //     setUsersFilter(users);
  //   }

  // }

  let handleGetValue = (event) => {
    const { value } = event.target
    const regexValue = new RegExp(''+value+'', "i");
    console.log(regexValue)

    const filterTable = usersFilter.filter(element => 
      element.firstName.match(regexValue)
      // const filterName = element.firstName.toLowerCase().includes(''+value.toLowerCase()+'')
      // const filterLastName = element.lastName.toLowerCase().includes(''+value.toLowerCase()+'')
      // const filterEmail = element.email.toLowerCase().includes(''+value.toLowerCase()+'')
      // const filterAmount = element.amount.toLowerCase().includes(''+value.toLowerCase()+'')
      // return filterName || filterLastName || filterEmail || filterAmount
    )
    setUsersFilter(filterTable)
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
