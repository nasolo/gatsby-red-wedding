import styled from 'styled-components'
import tw from 'twin.macro'
import PropTypes from 'prop-types';

const defaultText = 'Please pass text as a prop'

export const Title = styled.h1.attrs(props =>({
    className: 'card-title',
    children: `${props.text ? props.text : defaultText}`
    
}))`

 ${
     tw`
        mb-2
     `
 }

font-size: 2.5rem;
line-height: 1;

`

Title.propTypes = {
    text: PropTypes.string.isRequired
}