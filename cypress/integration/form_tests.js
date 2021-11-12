describe('Form Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameText = () => cy.get('input[name=name]');
    const instructText = () => cy.get('input[name=instructions]');
    const sizeText = () => cy.get('input[name=size]');
    const pepTop = () => cy.get('input[name=pepperoni]');
    const sausTop = () => cy.get('input[name=sausage]');
    const sauceText = () => cy.get('input[name=sauce]');
    const addOrderBtn = () => cy.get("button[id='order-button']");

    it('Add to Order button starts disabled', () => {
        addOrderBtn().should('be.disabled');
    })
    it('can type in the inputs', () => {
        nameText()
            .should('have.value', '')
            .type('Jordan Cabanada')
            .should('have.value', 'Jordan Cabanada');
        instructText()
            .should('have.value', '')
            .type(`Don't forget the shake`)
            .should('have.value', `Don't forget the shake`);

    })
    it('Checking multiple toppings', () => {
        pepTop()
            .check();
        sausTop()
            .check();
    })

    it('Empty', () => {
        nameText()
            .type('Jordan')
            .clear();
        instructText()
            .type('knock')
            .clear();
        pepTop()
            .check().uncheck();
        sausTop()
            .check().uncheck();


    })

})