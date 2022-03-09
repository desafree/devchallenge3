import { useEffect, useState } from 'react';
import Navigation from './compenents/Navigation';
import NavigationActive from './compenents/NavigationActive';
import Apartment from './compenents/Apartment';
import FilterBar from './compenents/FilterBar';

function App() {

  const [apartments, setApartments] = useState([])
  const [filteredApartments, setFilteredApartments] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/apartments')
      .then(response=>response.json())
      .then(data=>{setApartments(data); setFilteredApartments(data)})
      .then(()=>console.log(apartments,filteredApartments))
  },[])

  function filter(value) {
    setFilteredApartments(value)
  }

  return (
    <>
      <FilterBar filter={filter} filteredApartments={apartments}></FilterBar>
      {/* <Navigation></Navigation> */}
      {/* <NavigationActive filter={setFilteredApartments} apartments={(apartments)? apartments:''}></NavigationActive> */}
      {/* <div className="content">
        {filteredApartments.map((apartmet)=>{
          return <Apartment photo={apartmet.photo} superhost={apartmet.superHost} type={apartmet.type} beds={apartmet.beds} rating={apartmet.rating} title={apartmet.title}></Apartment>
        })}
      </div> */}

      <div className='content'>
        {filteredApartments.map((apartment,index)=>{
          return (
            <Apartment apartment={apartment} keyy={index}/>
          )
        })}
      </div>
    </>
  );
}

export default App;

// http://localhost:8000/apartments
