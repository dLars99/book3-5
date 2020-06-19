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

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
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