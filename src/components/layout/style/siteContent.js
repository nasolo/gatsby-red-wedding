import styled from 'styled-components'
import tw from 'twin.macro'


export const  SiteContent = styled.main.attrs({
    className: 'site-content'
})`
    ${
        tw`
            z-10
            relative
            flex-1
            block
        `
    }

`