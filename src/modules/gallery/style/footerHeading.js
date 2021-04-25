import styled from 'styled-components'
import tw from 'twin.macro'
import { Icon } from '../../../components'
import React from 'react'


export const FooterHeadingWrapper = styled.div.attrs({
    className: `footer-heading-wrapper`
})`
${
    tw`
        flex
        items-center
    `
}
`


export const FooterHeading = styled.div.attrs(props => ({
    className: `footer-heading`,
    children: props.heading

}))`

    ${
        tw`
            flex-auto
            w-9/12
            text-center
            py-4
            text-black
            font-bold
            m-auto

        `
    }

`


export const FooterCloseBtn = styled.button.attrs(props =>({
    className: 'footer-close-Btn',
    children:  <Icon icon={`${props.icon || 'wrong'}`} size="small" fill="grey" />
}))`



`
