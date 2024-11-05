import {emailTemplate} from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
    test('email template should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ')
    })

    test('email template should contain a name', () => {
        expect(emailTemplate).toContain('{{name}}')
    })
})