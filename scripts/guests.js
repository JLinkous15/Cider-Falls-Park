/*
Import guest list and iterate through their names. Functions may also be required for Event Listener
*/
import { getGuests } from "./database.js"
const guests = getGuests()

const guestHTML = (guestObj) => {
    let guestHTML = '<ul>'
    for (const guest of guestObj){
        guestHTML += `<li class="guest--${guest.id}">${guest.guestName}</li>`
    }
    guestHTML += `</ul>`
    return guestHTML
}

export const guestList = () => guestHTML(guests)

