import styled from 'styled-components'
import tw from 'twin.macro'



export const Heading = styled.h5.attrs(props =>({
    className: 'card-heading',
    children: props.heading
}))`

${tw`
    mb-1
`}

`