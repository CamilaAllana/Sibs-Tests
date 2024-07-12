describe('Portal MBWay', () => {
    const projectURL = 'https://www.mbway.pt/'
  
    it('GET - List of all objects', () => {
     
      cy.request({
        method: 'GET',
        url: projectURL
      }).then((response =>  {
        expect(response.status).to.equal(200)
      }))
    })
  
    it('GET - List of objects by ID', () => {
     
      cy.request({
        method: 'GET',
        url: projectURL,
        qs: { id: "menu-item-788506", id: "menu-item-808677"}
      }).then((response =>  {
        expect(response.status).to.equal(200)
      }))
  
  
    })

    it('GET - Single object', () => {
     
      cy.request({
        method: 'GET',
        url: projectURL,
        qs: { id: "text-8"}
      }).then((response =>  {
        expect(response.status).to.equal(200)
      }))
  
  
    })

    it('PATCH - Partially update object', () => {
   
      cy.request({
        method: 'PATCH',
        url: projectURL,
        qs: { id: "text-8"},
        failOnStatusCode: false,
        body:
        {
          "style": "font-size: 20px; font-family: 'NexaBold' !important;"
       }
      }).then((response => {
        expect(response.status).to.equal(403)
      }))
  
  
    })
  
    it('DELETE - Delete object', () => {
     
      cy.request({
        method: 'DELETE',
        url: projectURL,
        qs: { id: "text-8"},
        failOnStatusCode: false,
      }).then((response => {
        expect(response.status).to.equal(403)
      }))
  
  
    })

})