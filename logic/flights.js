function Flights() {
    const calculateNumberOfFlights = function (numPassengers, capacity) {
        const numFlights = Math.ceil(numPassengers / capacity)
        console.log(numFlights)
        return numFlights % 2 == 0 ? numFlights : numFlights
    }

    return { calculateNumberOfFlights };
}

module.exports = Flights();