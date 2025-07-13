describe('Testes na página inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    
    it ('deve clicar no botão "ver pets disponíveis para adoção"', () => {
        cy.get('.button').click();
    })

    it ('Deve testar o botão "Home"', () => {
        cy.get('.header__home').click();
    })

    it ('Deve testar o botão de "Mensagens"', () => {
        cy.get('.header__message').click();
    })

    it ('Deve visitar a página de "Login"', () => {
        cy.visit ('https://adopet-frontend-cypress.vercel.app/login');
    })

    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it ('Deve visitar a pagina /home do Adopet e clicar no botão "Falar com responsável"', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
       cy.get(':nth-child(1) > .card__contact').click();    
    })

});