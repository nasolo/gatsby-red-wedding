import styled from "styled-components";
import tw from 'twin.macro';

export const Seek = styled.input.attrs(props =>({
    type: 'range',
    value: props.value || 100,
    min: 0,
    max: 0.999999,
    step: 'any',
    className: 'seek_to_range'
}))`

${
    tw`
        m-auto
        w-full
        h-full
    `
}
    
`

