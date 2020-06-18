import businesses from "./database.js"

// Resets for answers to lightning exercise 2

const filterMfgBusinesses = () => {
    const mfgBusinesses = businesses.filter(business => {
        return business.companyIndustry === "Manufacturing"
    })
    return mfgBusinesses
}

export default filterMfgBusinesses