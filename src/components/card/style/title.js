import styled from 'styled-components'
import tw from 'twin.macro'



export const Title = styled.h2.attrs(props =>({
    className: 'card-title',
    children: props.title
}))`

${tw`
    mb-1
`}

`