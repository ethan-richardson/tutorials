let restaurant = {
    name: 'Ballyhoo',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        return this.guestCount 
    },
    removeParty: function (partySize) {
        this.guestCount = partySize - this.guestCount
        return this.guestCount
    }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(8)
console.log(restaurant.checkAvailability(3))

