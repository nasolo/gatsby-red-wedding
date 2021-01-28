import styled from 'styled-components'
import tw from 'twin.macro'


const body = tw`
    flex-1
    p-1
`
const imgOverlay = tw`
    absolute
    inset-0
    p-4
    flex
    flex-col
`

const textJustification = (justifyContent) => {

    console.log(justifyContent)

    switch(justifyContent){
        case 'end':
            return tw`
                justify-end
            `
        case 'center': 
            return tw`
                justify-center
            `
        case 'between':
            return tw`
                justify-between
            `
        case 'around':
            return tw`
                justify-around
            `
        case 'evenly':
            return tw`
                justify-evenly
            `
        default: 
            return tw`
                justify-start
            `
    }
}






const getCardStyle = (overlay) => {
    switch(overlay){
        case true:
            return imgOverlay
        default:
            return body 
    }
}


export const Body = styled.div.attrs({
    className: 'body'
})`

${({overlay}) => getCardStyle( overlay )};
${({ justifyContent }) => textJustification(justifyContent)};

background-color: transparent;


`