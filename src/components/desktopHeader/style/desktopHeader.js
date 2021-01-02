import styled from 'styled-components'
import tw from 'twin.macro'



export const HideDesktopHeader = styled.div.attrs({
    className: 'site-desktop-header'
})`

${tw`
    hidden
    lg:block
`}

`

