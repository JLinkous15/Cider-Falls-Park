/*
Destinations will be where all html is compiled from the attractions and 
services into a neat package. A function returning html and click events may be necessary
*/

import { getDestinations, getGuests } from "./database.js"

const destinations = getDestinations()
const guests = getGuests()

const destinationHTML = (destinationObj) => {
    let destinationsHTML = `<h1 class="title">Destinations</h1><div class="imageContainer">`
    for (const destination of destinationObj) {
        if(destination.id < 4){
            destinationsHTML += `<div id="area--${destination.id}">${destination.name}<img src="${destination.img}" alt="${destination.name}" id="destination--${destination.id}" class="destinationsImages"></div>`
        } 
    }
    destinationsHTML += `</div><div class="imageContainer">`
    for (const destination of destinationObj) {
        if(destination.id >3){
            destinationsHTML += `<div id="area--${destination.id}">${destination.name}<img src="${destination.img}" alt="${destination.name}" id="destination--${destination.id}" class="destinationsImages"></div>`
        }
    }
    destinationsHTML += `</div>`
    return destinationsHTML
}

export const destinationList = () => destinationHTML(destinations)

document.addEventListener(
    "click",
    (e) => {
        const clickedItem = e.target
        if (clickedItem.id.startsWith("area")){
            const [,clickedId] = clickedItem.id.split("--")
                for (const destination of destinations){
                    if (destination.id === parseInt(clickedId)){
                        let guestArray = []
                        for (const guest of guests){
                            if(guest.locationId === destination.id){
                                guestArray.push(guest)
                            }
                        } 
                        window.alert(`there are ${guestArray.length} guests in the area.`)
                    }
                }
        }
    }
)