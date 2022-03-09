const Apartment = ({apartment,keyy}) => {
    return ( 
        <div className="apartment" key={keyy}>
              <div className="imgContainer">
                <img src={apartment.photo} alt="" />
              </div>
              <div className="first-row">
              {(apartment.superHost)? <h4>SUPER HOST</h4> : null}
                <p>{apartment.type}</p>
                <p>{(apartment.beds)?apartment.beds+' beds': null}</p>
                <p className='rating'><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#EB5757"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>{apartment.rating}</p>
              </div>
              <p className='title'>{apartment.title}</p>
            </div>
     );
}
 
export default Apartment;