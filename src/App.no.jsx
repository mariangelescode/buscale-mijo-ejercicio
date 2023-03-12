{users.map((user,i)=>{
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