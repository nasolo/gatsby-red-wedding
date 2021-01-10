import styled from 'styled-components'
import tw from 'twin.macro'


export const Body = styled.div.attrs({
    className: 'card-body'
})`

${tw`
    flex-1
    p-5
    flex
    flex-col
    justify-end
    mb-12
    text-white
    z-10
`}

`