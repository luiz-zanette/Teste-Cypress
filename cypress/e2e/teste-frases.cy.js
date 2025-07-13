describe ('Teste de frases presentes na pagina', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it ('Deve verificar se a frase "Quem ama adota" está visível na página', () => {
        cy.contains('p', 'Quem ama adota').should('be.visible');
    })

    it ('Deve verificar se a frase "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!", está visível na página', () => {  
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    }) 
});
