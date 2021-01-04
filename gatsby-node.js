/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const createPages = require('./src/create/createPages')



exports.createPagesStatefully = async ({graphql, actions, reporter}, options) => {
    await createPages({actions, graphql, reporter}, options)
}