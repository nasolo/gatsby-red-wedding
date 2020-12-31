/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css';

import React from 'react'
import { Layout } from './src/components'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{ element }</Layout>
}

export const wrapRootElement  = ({ element }) =>{
    return <ThemeProvider theme={theme}>{ element }</ThemeProvider>
}