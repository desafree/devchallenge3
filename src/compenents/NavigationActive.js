import { useState } from "react";

const NavigationActive = ({apartments}) => {
    

    const [location,setLocation] = useState()
    const [guests,setGuests] = useState()
    const [apartmentsFiltered,setApartmentsFiltered] = useState(apartments.slice())

    const updateLocation = (e)=>{
        // console.log(e.target.value)
        setLocation(e.target.value)
        console.log(apartmentsFiltered)
        const newApartementFiltered = apartments.filter((apartment)=>{
            if(apartment.city.includes(location)) {
                return true
            }
        })

        setApartmentsFiltered(newApartementFiltered)
    }

    const updateGuests = (e)=>{

    }


    // console.log(apartments)


    return ( 
        <div className="navigationActive">
            <form action="#">
                <div className="inputContainer">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" onChange={(e)=>{
                        updateLocation(e)
                    }}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="guests">Guests</label>
                    <input type="text" name="guests" id="guests" />
                </div>
                <div className="buttonContainer">
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>Search</button>
                </div>
            </form>
        </div>
     );
}
 
export default NavigationActive;