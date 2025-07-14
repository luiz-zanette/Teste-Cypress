//Verifica se a API de mensagem está funcionando corretamente, ocultando dados sensíveis como token de autorização
describe('API Adpoet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc1MjQ0ODAxMSwiZXhwIjoxNzUyNzA3MjExfQ.sNovRgcUpsWqbaoPdH-_9hI2tMgPTLYLJyVzypzn7Zc' //define o token de autorização

    it('Mensagem da API', () => {
        cy.request({
            method: 'GET', //para buscar
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c', //URL da API da pessoa que enviou mensagem
            headers: { authorization } //adiciona o token de autorização
        }).then((response) => {
            expect(response.status).to.be.equal(200) //código de status 200
            expect(response.body).is.not.empty //não pode estar vazio
            expect(response.body).to.have.property('msg') //deve ter a propriedade msg
        })
    });
});