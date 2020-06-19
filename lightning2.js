import businesses from "./database.js"

// Provides a list of only manufacturing businesses

const filterMfgBusinesses = () => {
    const mfgBusinesses = businesses.filter(business => {
        return business.companyIndustry === "Manufacturing"
    })
    return mfgBusinesses
}

export default filterMfgBusinesses