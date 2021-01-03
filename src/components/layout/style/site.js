import styled from 'styled-components'
import tw from 'twin.macro'


export const Site = styled.div.attrs({
    className: 'site'
})`
${
    tw`
        flex
        flex-col
        h-full
        relative
    `
}
`