function Flights() {
    const calculateNumberOfFlights = function (numPassengers, capacity) {
        const numFlights = numPassengers / capacity
        console.log(numFlights)
        return numFlights % 2 === 0 ? numFlights : numFlights + 1
    }

    return { calculateNumberOfFlights };
}

module.exports = Flights();