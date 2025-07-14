describe('API Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc1MjQ1MjY2NCwiZXhwIjoxNzUyNzExODY0fQ.bk3hZAr80ohf8li5lIoKmlpI0AZfd8AWtufIwFkrHz8';

    it('Verificar perfil do usuário', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: { Authorization: authorization },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).is.not.empty;
            expect(response.body).to.have.property('perfil');
            expect(response.body.perfil.nome).to.eq('Ana de Jesus');
        });
        });
    });