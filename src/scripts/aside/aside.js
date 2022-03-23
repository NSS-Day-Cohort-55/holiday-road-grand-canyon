// "id":1,
// 			"bizarre": "name of attraction",
// 			"eatery":"name of eatery",
// 			"park":{
// 				"state":"MN",
// 				"parkName":"Grand National"
// 			}

{/* <div class="savedTripsCard">
            <div class="savedTrip">
                <p>State</p>
                <p>Park</p>
                <p>Eatery</p>
                <p>Bizarre</p>
            </div>
        </div> */}



export const asideSelectionFormatter = (asideArr) => {
    let asidehtmlPosition = document.querySelector(".savedTrips")
    let asideHTMLelement = `<div class="savedTripCard">
    <button id="closebtn" class="closebtn">&times;</button>`;

    for(const asideObj of asideArr){
        asideHTMLelement += `<div class="savedTrip">
                                <p>${asideObj.park.state}</p>
                                <p>${asideObj.park.parkName}</p>
                                <p>${asideObj.eatery}</p>
                                <p>${asideObj.bizarre}</p>
                            </div>`
    }
    asideHTMLelement += `</div>`
    asidehtmlPosition.innerHTML = `${asideHTMLelement}`    
}