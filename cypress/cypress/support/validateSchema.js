import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true}) // options can be passed, e.g. {allErrors: true}

export const validateSchema = (getUsersSchema, body) => {
    cy.fixture(getUsersSchema).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(body)
        if (!valid) {
            cy.log(validate.errors).then(() => {
                throw new Error('Contract mismatched')
            })
        } else {
            Cypress.log({
                name: 'validateSchema',
                displayName: 'schema',
                message: `${getUsersSchema} matched!`
            })
        }
    })
}