import businesses from "./database.js"
import displayBusinesses from "./display.js"
import filterMfgBusinesses from "./lightning2.js"
import showPurchasingAgents from "./lightning3.js"

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

displayBusinesses(businesses)

document.querySelector(".lightning2").addEventListener("click", clickEvent => {
    const mfgBusinesses = filterMfgBusinesses()
    outEl.innerHTML = "<h1>Manufacturing Businesses"
    displayBusinesses(mfgBusinesses)
})

document.querySelector(".lightning3").addEventListener("click", clickEvent => {
    showPurchasingAgents(businesses, outEl)
})