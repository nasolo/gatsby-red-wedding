import styled from 'styled-components'
import tw from 'twin.macro'





export const Card = styled.div.attrs(props => ({
    className: `${props.overlay ? `card-img-overlay` : `card` }`
}))`




${
    tw`
        relative
        flex
        flex-col
        min-w-0
        bg-transparent
        rounded-none
        border-0
        h-full
        text-white
    `
};





word-wrap: break-word;
background-clip: border-box;

`