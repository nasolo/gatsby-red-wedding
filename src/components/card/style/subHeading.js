import styled from 'styled-components'
import tw from 'twin.macro'



export const SubHeading = styled.h5.attrs(props =>({
    className: 'card-subtitle',
    children: props.subtitle
}))`

${tw`
    mb-2
`}

`