
describe('Go rest endpoints', () => {
    context('GET /users', () => {
        it('should return a list with all users', { apiDisplayRequest: true }, () => {
            cy
            .api({
                method: 'GET',
                url: '/users'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body[0]).to.have.all.keys(
                        'id', 'name', 'email', 'gender', 'status'
                      )
                      cy.validateSchema('getUsersSchema',response.body)
                });
        });
    });

    context('POST /users',()=>{
        it('should create a new user', { apiDisplayRequest: true }, () => {
           cy
           .api({
                method: 'POST',
                url: '/users',
                auth: {"bearer": "8f984ef195008e885e844ac62dcb89d0939bf24e647a8fcad11acdd9ee4683b8"},
                body: 
                {
                    name: "Peter Thomas",
                    gender: "male",
                    email: "lkjldksdsdjds@lkjlskdja.cl",
                    status: "active"
                    }
                })
                .should((response)=>{
                    expect(response.status).to.eq(201)
                });
            });
         });
});
