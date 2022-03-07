import { useEffect, useState } from 'react';
import Navigation from './compenents/Navigation';
import NavigationActive from './compenents/NavigationActive';

function App() {

  const [apartments, setApartments] = useState()

  useEffect(()=>{
    fetch('http://localhost:8000/apartments')
      .then(response=>response.json())
      .then(data=>setApartments(data))
      .then(()=>console.log(apartments))
  },[])

  return (
    <>
      <Navigation></Navigation>
      <NavigationActive apartments={(apartments)? apartments:''}></NavigationActive>
    </>
  );
}

export default App;

// http://localhost:8000/apartments
