import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

import store from '../store/store'

const appStore = store()

export default ({element}) => {
    return (
        <Provider store={appStore}>
            <ThemeProvider theme={theme}>
                    {element}
            </ThemeProvider>
        </Provider>
    )
}