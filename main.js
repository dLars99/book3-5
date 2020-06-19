import businesses from "./database.js"
import displayBusinesses from "./display.js"
import filterMfgBusinesses from "./lightning2.js"
import showPurchasingAgents from "./lightning3.js"
import reduceExercises from "./reduce.js"
import showBigSpenders from "./bigspenders.js"

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// Invoke main display function
displayBusinesses(businesses)

// Trigger manufacturing business list upon button click
document.querySelector(".lightning2").addEventListener("click", clickEvent => {
    const mfgBusinesses = filterMfgBusinesses()
    outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"
    displayBusinesses(mfgBusinesses)
})

// Trigger purchasing agent list upon button click
document.querySelector(".lightning3").addEventListener("click", clickEvent => {
    showPurchasingAgents(businesses, outEl)

})

// Main screen search box
document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
});

// Run commands for first reduce lightning exercise
reduceExercises()

// Trigger Big Spenders list
document.querySelector(".bigSpenders").addEventListener("click", clickEvent => {
    const bigSpenders = showBigSpenders()
    outEl.innerHTML = "<h1>BigSpenders</h1>"
    displayBusinesses(bigSpenders)
})