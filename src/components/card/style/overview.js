import styled from 'styled-components'
import tw from 'twin.macro'



export const Overview = styled.p.attrs(props =>({
    className: 'card-text',
    children: props.overview
}))`

${tw`
    mt-0
    my-4
    text-base
`}

`