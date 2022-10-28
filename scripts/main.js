/*
Here, we will import all html functions required by index.html.
*/
import { guestList } from "./guests.js"
import { destinationList } from "./destinations.js"
import {servicesList } from "./services.js"

const serviceHTML = `
<section id="services">
    ${servicesList()}
</section>`

const serviceHTMLElement = document.querySelector("#servicesContainer")
serviceHTMLElement.innerHTML = serviceHTML

const applicationHTML = `
<section id="destinations">
${destinationList()}
</section>
<aside id="guestList">
${guestList()}
</aside>`

const parentHTMLElement = document.querySelector("#mainContainer")
parentHTMLElement.innerHTML = applicationHTML
