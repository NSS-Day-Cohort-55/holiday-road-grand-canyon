/*
significant data: (all strings or arrays)

park code (4 digit id which can be put in the URL): JSON.data[i].parkCode

a single park: JSON.data[i]
park name: JSON.data[i].fullName
description: JSON.data[i].desctiption
location JSON.data[i].latLong OR JSON.data[i].latitude AND JSON.data[i].longitude
park zip code: JSON.data[i].addresses[i].postalCode
park state: JSON.data[i].states
phone number: JSON.data[i].contacts.phoneNumbers[i].phoneNumber
email: JSON.data[i].contacts.emailAddresses[i].emailAddress
directions: JSON.data[i].directionsInfo OR JSON.data[i].directionsUrl
*/