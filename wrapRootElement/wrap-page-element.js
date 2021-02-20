
import React from 'react'
import { Layout } from '../src/components'


export default  ({ element, props }) => {
    return(
        <Layout {...props}>
            { element }
        </Layout>
    )

}