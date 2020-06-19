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
}

export default showPurchasingAgents