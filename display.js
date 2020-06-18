// Display businesses to the DOM based on list passed to it

const displayBusinesses = (businessList) => {
    const outEl = document.querySelector("#output")
    businessList.forEach(business => {
        // First lightning exercise: add section containing city, state code, and zip code. Use square bracket notation on the zip code.
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>
        ${business.addressCity}, ${business.addressStateCode} ${business["addressZipCode"]}
        </section>`
        outEl.innerHTML += "<hr/>"
    });
}

export default displayBusinesses