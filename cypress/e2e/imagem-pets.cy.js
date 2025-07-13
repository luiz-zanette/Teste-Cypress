describe('Verifica se as imagens dos pets estão visíveis', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    });

    it('deve verificar se as imagens dos pets estão visíveis', () => {
                cy.get('.cards').should('be.visible');
            });
        });