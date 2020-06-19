const showPurchasingAgents = (businesses, outEl) => {
    outEl.innerHTML = "<h1>Purchasing Agents</h1>";
    
    /*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
    */
   const agents = businesses.map(business => {
       return {
           "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
           "company": business.companyName,
           "phoneNumber": business.phoneWork
       }
    })
    
    agents.forEach(agent => {
        outEl.innerHTML += `<h2>${agent.fullName}</h2>
            <p>${agent.company}</p>
            <p>${agent.phoneNumber}</p>
            <hr/>`
    });

    document.querySelector("#searchBar").innerHTML = `<input type="text" placeholder = "Search purchasing agents" id="agentSearch" />`

    document
        .querySelector("#agentSearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /* WHEN USER PRESSES ENTER, FIND MATCHING BUSINESS */
                const foundAgent = agents.find(
                    agent =>
                    agent.fullName.includes(keyPressEvent.target.value)
                );

                outEl.innerHTML = `
                <h2>
                ${foundAgent.fullName}
                </h2>
                <section>
                ${foundAgent.company}

                </section>
                <section>
                ${foundAgent.phoneNumber}
                </section>
            `;
            }
        });


}

export default showPurchasingAgents