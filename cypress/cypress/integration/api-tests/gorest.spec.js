import {api} from '@bahmutov/cy-api'

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
                });
        });
    });
});