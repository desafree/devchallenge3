import { useState } from "react";
import logo from '../windbnb-master/logo.png'

const FilterBar = ({filteredApartments, filter}) => {

    const [city,setCity] = useState('')
    const [guest,setGuest] = useState(0)

    const [adults,setAdults] =useState(0)
    const [children,setChilder] = useState(0)

    let array1 = filteredApartments.filter((apartment)=>{

        if(city==''){
            if(apartment.maxGuests>=guest) {
                return true
            }
        }
        else {
            if(apartment.maxGuests>=guest && apartment.city.toLowerCase().includes(city.toLowerCase())) {
                return true
            }
        }
    })

    const refreshApartment = (e)=>{
        e.preventDefault()
        let array1 = filteredApartments.filter((apartment)=>{

            if(city==''){
                if(apartment.maxGuests>=guest) {
                    return true
                }
            }
            else {
                if(apartment.maxGuests>=guest && apartment.city.toLowerCase().includes(city.toLowerCase())) {
                    return true
                }
            }
        })

        console.log('clicked')

        filter(array1)
    }

    const suggestion = (e)=>{
        
        let str = e.target.innerText
        let newStr = str.substring(0, str.indexOf(','));
        const inputCity = document.querySelector('.city')
        console.log(inputCity.value)
        console.log(inputCity)
        inputCity.value = 'newStr'
        setCity(newStr)
    }


    const addAdults = (e)=>{
        setAdults(adults+1)
        const inputGuest = document.querySelector('.number')
        console.log(inputGuest)
        inputGuest.value ++
        finalGuest()

    }

    const subAdults = (e)=>{
        setAdults(adults-1)
        const inputGuest = document.querySelector('.number')
        console.log(inputGuest)
        inputGuest.value --
        finalGuest()

    }

    const addChildren = (e)=>{
        setChilder(children+1)
        const inputGuest = document.querySelector('.number')
        console.log(inputGuest)
        inputGuest.value ++
        finalGuest()

    }

    const subChildren = (e)=>{
        setChilder(children-1)
        const inputGuest = document.querySelector('.number')
        console.log(inputGuest)
        inputGuest.value --
        finalGuest()

    }

    const finalGuest = ()=>{
        let finalNumber= adults + children
        setGuest(finalNumber)
    }

    return (
        <>
        <div className="navbarr" onClick={()=>{
            const activeNav = document.querySelector('.inputBar')
            activeNav.style.display = 'block'
        }}>
            <img src={logo} alt="" />
            <div className="navigation">
                <div className="city">{(city)?city:'Add city'}</div>
                <div className="guests">{(guest)?guest+' guests' : 'Add guest'}</div>
                <div className="logoo"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EB5757"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
            </div>
        </div>






        <div className="inputBar">
            <form action="#" onSubmit={(e)=>{
                refreshApartment(e)
            }}>
                <div className="input-container input-prova">
                    <div className="inputBox">
                        <label htmlFor="city">LOCATION</label>
                        <input className="city" type="text"  value={city} onChange={(e)=>{
                            setCity(e.target.value)
                        }}/>
                    </div>
                    <div className="suggestion">
                        <button>
                            <p onClick={(e)=>{suggestion(e)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg> Helsinki, Finland</p>
                        </button>
                        <button>
                            <p onClick={(e)=>{suggestion(e)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg> Turku, Finland</p>
                        </button>
                        <button>
                            <p onClick={(e)=>{suggestion(e)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg> Oulu, Finland</p>
                        </button>
                        <button>
                            <p onClick={(e)=>{suggestion(e)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg> Vaasa, Finland</p>
                        </button>
                    </div>
                </div>
                <div className="input-container">
                    <div className="inputBox">
                        <label htmlFor="guest">GUEST</label>
                        <input type="number" className="number" readonly="readonly" defaultValue={0} onChange={(e)=>{setGuest(e.target.value)}}/>
                    </div>
                    <div className="buttons-container">
                        <div className="button-number">
                            <h4>Adults</h4>
                            <p>Ages 13 or above</p>
                            <div className="button-box">
                                <button onClick={subAdults}>-</button>{adults}<button onClick={addAdults}>+</button>
                            </div>
                        </div>
                        <div className="button-number">
                            <h4>Children</h4>
                            <p>Ages 2-12</p>
                            <div className="button-box">
                                <button onClick={subChildren}>-</button>{children}<button onClick={addChildren}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="search" onClick={()=>{
                    const activeNav = document.querySelector('.inputBar')
                    activeNav.style.display = 'none'
                }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> SEARCH</button>
            </form>
        </div>
    </>
    );
}
 
export default FilterBar;