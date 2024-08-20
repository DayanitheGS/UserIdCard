import React from 'react'

const usercard = () => {
  const a=[
    {"name":"AK","city":"chennai","roll":"front-end-developer","net":true,"skill":["5 YEAR EXPERIENCE IN DAYA&CO","HTML","CSS","REACT","JAVA SCRIPT"],"src":"image/1.webp"},
    {"name":"Iswariya","city":"bengalure","roll":"front-end-developer","net":true,"skill":["5 YEAR EXPERIENCE IN DAYA&CO","HTML","CSS","REACT","JAVA SCRIPT"],"src":"image/3.webp"},
    {"name":"vijay","city":"mumbai","roll":"back-end-developer","net":true,"skill":["5 YEAR EXPERIENCE IN DAYA&CO","HTML","CSS","REACT","JAVA SCRIPT"],"src":"image/2.webp"},
  ]
  return (
    a.map((value)=>(

   
    <div className='card'>
      <div className='net' >{value.net ?"online":"offline"}</div>
      <div className='img'><img src={value.src} alt="User" /></div>
      <h3>{value.name}</h3>
      <h3>{value.city}</h3>
      <p>{value.roll}</p>
      <div className='button'>
        <button className='primary'>message</button>
        <button className='primary outline'>following</button>
      </div>
     
      <div className='skill'>
        <h5>SKILL</h5>
        <ul>
       { value.skill.map((item)=>(
          <li>
              {item}
          </li>

          
        ))}
        </ul>
      </div>

    </div>
     
    ))
  )

}

export default usercard