import Navbar from "../../src/components/Navbar"
import withProviders from "../../src/hoc/withProviders"

const NavbarWithProviders = withProviders(Navbar)


describe('Cypress', () => {   
  it('renders Navbar', () => {   
      cy.mount(<NavbarWithProviders language="en"/>) 
  })
})