import businesses from "./database.js"

// Get all the "big spenders" and return them as a list

const showBigSpenders = () => {

    const bigSpenders = businesses.filter(business => {
        return business.orders.some(order => order > 9000)
    })

    return bigSpenders

}

export default showBigSpenders