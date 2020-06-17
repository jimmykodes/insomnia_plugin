const _ = require('lodash')
const faker = require('faker')

module.exports = {
    name: "faker",
    displayName: "Faker",
    description: "Wrapper for Faker.js",
    args: [
        {
            displayName: "Path",
            description: "Faker function path",
            type: "string",
        },
    ],
    async run(context, path) {
        let func = _.get(faker, path)
        if (_.isFunction(func)) {
            return func()
        }
        return "Invalid Path"
    }
}