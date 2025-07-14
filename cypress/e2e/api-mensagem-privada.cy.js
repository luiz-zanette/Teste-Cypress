//Verifica se a API de mensagem está funcionando corretamente, expondo dados sensíveis como token de autorização
describe('API Adpoet', () => {

    it('Mensagem da API', () => {
        cy.request({
            method: 'GET', //para buscar
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c', //URL da API da pessoa que enviou mensagem
            headers: Cypress.env() //adiciona o token de autorização do arquivo cypress.env.json
        }).then((response) => {
            expect(response.status).to.be.equal(200) //código de status 200
            expect(response.body).is.not.empty //não pode estar vazio
            expect(response.body).to.have.property('msg') //deve ter a propriedade msg
        })
    });
});