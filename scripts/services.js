//Create a stringHTML placed above the park area gridsaying:
//Park services: list, of, park, services. 
//When clicked, it should create a window alert saying:
//Service is available in areas. Be careful of conjunctions (if else using local scope array)!

//Imports
import { getServices, getServeJoins, getDestinations } from "./database.js"
const services = getServices()
const serveJoins = getServeJoins()
const destinations = getDestinations()

//Create the function for the string.
const serviceHTML = (servObj) => {
    let serviceString = `<ul id="services">Park services:`
    for (const service of servObj){
        serviceString += `<li id="service--${service.id}" class="serviceList">${service.serviceName}, </li>`
    }
    serviceString += "</ul>"
    return serviceString
}




//Create and export function housing string
export const servicesList = () => serviceHTML(services)


//click event.
//Proofread click event. there are no errors, but is poorly and clumsily written.
//Look at Line 48's servId
document.addEventListener(
    "click",
    (e) => {
        const clickedItem = e.target
        if(clickedItem.id.startsWith("service")){
            const [,serviceId] = clickedItem.id.split("--")
            let name = ""
            let serveJoinArray = []
            let destinationArray = []
            for (const service of services){
                if (parseInt(serviceId) === service.id){
                    name += service.serviceName
//Above compares HTML and Javascript. Below iterates through the necessary objects.
                    for (const serveJoin of serveJoins){
                        if (serveJoin.servId === service.id){
                            serveJoinArray.push(serveJoin)
                        }
                    }
                    for (const destination of destinations){
                        for (const taco of serveJoinArray){
                            if (destination.id === taco.desId){
                                destinationArray.push(destination.name)
                            }
                        }
                    }
                }
            }
            let alertString = `${name} is available in ${destinationArray.join(" and ")}`
            window.alert(alertString)
        }
        }
    
)