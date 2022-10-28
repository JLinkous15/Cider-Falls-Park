const database = {
    destinations: [{
        id: 1,
        location: "Northeast",
        name: "The Chamfort River",
        img: "images/chamfort.jpg"
    },{
        id: 2,
        location: "North",
        name: "The Lost Wolf Hiking Trail",
        img: "images/lostwolf.jpg"
    },{
        id: 3,
        location: "Northwest",
        name: "The Lodge",
        img: "images/lodge.jpg"
    },{
        id: 4,
        location: "Southwest",
        name: "The Gander River",
        img: "images/gander.jpg"
    },{
        id: 5,
        location: "South",
        name: "The Campsgrounds",
        img: "images/campgrounds.jpg"
    },{
        id: 6,
        location: "Southeast",
        name: "Pine Bluff Trails",
        img: "images/pinebluffs.jpg"
    }],

    services: [{
        id: 1,
        serviceName: "Rafting"
    },{
        id: 2,
        serviceName: "Canoeing"
    },{
        id: 3,
        serviceName: "Fishing"
    },{
        id: 4,
        serviceName: "Hiking"
    },{
        id: 5,
        serviceName: "Picnicking"
    },{
        id: 6,
        serviceName: "Rock Climbing"
    },{
        id: 7,
        serviceName: "Lodging"
    },{
        id: 8,
        serviceName: "Parking"
    },{
        id: 9,
        serviceName: "Information"
    },{
        id: 10,
        serviceName: "Dining"
    },{
        id: 11,
        serviceName: "Fishing"
    },{
        id: 12,
        serviceName: "Ziplining"
    },{
        id: 13,
        serviceName: "Lodge--Hotel"
    },{
        id: 14,
        serviceName: "Lodge--Restaurant"
    }],

    serveJoin: [{
        id: 1,
        servId: 1,
        desId:1,
    },{
        id: 2,
        servId: 2,
        desId:1,
    },{
        id: 3,
        servId: 3,
        desId:1,
    },{
        id: 4,
        servId: 4,
        desId:2,
    },{
        id: 5,
        servId: 5,
        desId:2,
    },{
        id: 6,
        servId: 6,
        desId:2,
    },{
        id: 7,
        servId: 13,
        desId:3,
    },{
        id: 8,
        servId: 14,
        desId:3,
    },{
        id: 9,
        servId: 7,
        desId:3,
    },{
        id: 10,
        servId: 8,
        desId:3,
    },{
        id: 11,
        servId: 9,
        desId:3,
    },{
        id: 12,
        servId: 5,
        desId:3,
    },{
        id: 13,
        servId: 10,
        desId:3,
    },{
        id: 14,
        servId: 4,
        desId:4,
    },{
        id: 15,
        servId: 11,
        desId:4,
    },{
        id: 16,
        servId: 7,
        desId:5,
    },{
        id: 17,
        servId: 8,
        desId:5,
    },{
        id: 18,
        servId: 9,
        desId:5,
    },{
        id: 19,
        servId: 4,
        desId:6,
    },{
        id: 20,
        servId: 5,
        desId:6,
    },{
        id: 21,
        servId: 12,
        desId:6
    }],

    guests: [{
        id: 1,
        guestName: "Charles Lebowitz",
        locationId: 2
    },{
        id: 2,
        guestName: "Penelope Pumpernickle",
        locationId: 1
    },{
        id: 3,
        guestName: "Jeremy Cruz",
        locationId: 4
    },{
        id: 4,
        guestName: "Donald Kapowski",
        locationId: 4
    },{
        id: 5,
        guestName: "Richard Zeigler",
        locationId: 3
    },{
        id: 6,
        guestName: "Kendrea Johnson",
        locationId: 6
    },{
        id: 7,
        guestName: "Victor Shoemaker",
        locationId: 5
    },{
        id: 8,
        guestName: "Burt Black",
        locationId: 2
    }]

}

export const getDestinations = () => database.destinations.map(destination => ({...destination}))
export const getServices = () => database.services.map(service => ({...service}))
export const getServeJoins = () => database.serveJoin.map(join => ({...join}))
export const getAttractions = () => database.attractions.map(attraction => ({...attraction}))
export const getGuests = () => database.guests.map(guest => ({...guest}))