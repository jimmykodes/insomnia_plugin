const userAgent = require('./template_tags/ua')
const fake = require('./template_tags/fake')

module.exports.templateTags = [
    userAgent,
    fake
]
