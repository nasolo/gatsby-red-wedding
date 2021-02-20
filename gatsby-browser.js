/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css';

import wrapWithLayout from './wrapRootElement/wrap-page-element'
import wrapWithProvider from './wrapRootElement/wrap-root-element'


export const wrapPageElement = wrapWithLayout
export const wrapRootElement = wrapWithProvider