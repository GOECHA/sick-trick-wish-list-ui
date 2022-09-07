describe('Form page for Skate Tricks', () => {
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .get('h1')
      .contains('Sick Trick Wish List');
    })

  beforeEach(() => {
    cy.visit('http://localhost:3000');

    it('Should be able to visit the page and receive data', () => {
      cy.intercept(`${baseURL}/users/2/teammates`, {
        "tricks": [
          {
          stance: "regular",
          name: "treflip",
          obstacle: "flat ground",
          tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
          id: 1
          },
          {
          stance: "switch",
          name: "heelflip",
          obstacle: "stairs",
          tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
          id: 2
          },
          {
          stance: "regular",
          name: "frontside 50-50, backside 180 out",
          obstacle: "ledge",
          tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
          id: 3
          }
          ]
      })

  it('Should be able to visit the page and input information into a form', () => {
    cy.get('form')
      .contains('Stance')
      .contains('Name of Trick')
      .contains('Obstacle')
      .contains('Link to Tutorial')
  
    })
  })
})
