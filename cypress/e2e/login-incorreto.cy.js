describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400,
    }).as('stubPost');
  });

  it('Deve preencher os campos do login incorretamente e retornar os erros ao usuário', () => {
    cy.login('000', '123');
    cy.contains("Por favor, verifique o email digitado").should('be.visible');
    cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should('be.visible');
    })
  
  it('Deve falhar mesmo que os campos estão corretamente preenchido, porém, não consta na DB de cadastros ativos', () => {
    cy.login('teste@exemplo.com', 'Senha123');
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible'); 
  });
});

// Descrições:
// cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', { >> Nome do stub "clone" + url do erro.
// StatusCode: 400 >> erro encontrado ao tentar logar com dados válidos mas não cadastrados > pelo inspect do chrome
// as.('stubPost'); >> stub + nome do stub para ser utilizado no wait posteriormente.
// cy.wait('@stubPost') >> espera o stub ser chamado para continuar o teste.