/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

require('./src/styles/global.css')

import wrapWithLayout from './wrapRootElement/wrap-page-element'
import wrapWithProvider from './wrapRootElement/wrap-root-element'


export const wrapPageElement = wrapWithLayout
export const wrapRootElement = wrapWithProvider