import { useState } from "react";

const NavigationActive = ({apartments,filter}) => {
    

    const [location,setLocation] = useState('')
    const [guests,setGuests] = useState(0)
    const [apartmentsFiltered,setApartmentsFiltered] = useState([...apartments])

    const navigationActive = document.querySelector('.navigationActive')

    const button = document.querySelector('.navigationActive .buttonContainer button')
    button.addEventListener('click',()=>{
        navigationActive.style.display = 'none'
    })

    const updateLocation = (e)=>{
        // console.log(e.target.value)
        setLocation(e.target.value)
        console.log(apartmentsFiltered)
        filterApartments()
        
    }

    const updateGuests = (e)=>{
        setGuests(e.target.value)
        filterApartments()
    }

    const filterApartments = ()=>{
        console.log(apartments)
        const newApartementFiltered = apartments.filter((apartment)=>{
            if(apartment.city.includes(location) && apartment.beds >= guests) {
                console.log(apartment.beds >= guests)
                return true
            }
        })

        setApartmentsFiltered(newApartementFiltered)
        console.log(apartmentsFiltered)
    }


    console.log(apartmentsFiltered)


    return ( 
        <div className="navigationActive">
            <form action="#" onSubmit={(e)=>{
                e.preventDefault()
                filter([...apartmentsFiltered])
            }}>
                <div className="inputContainer">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" value={location} onChange={(e)=>{
                        updateLocation(e) 
                    }}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="guests">Guests</label>
                    <input type="text" name="guests" id="guests" value={guests} onChange={(e)=>{updateGuests(e)}}/>
                </div>
                <div className="buttonContainer">
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>Search</button>
                </div>
            </form>
        </div>
     );
}
 
export default NavigationActive;