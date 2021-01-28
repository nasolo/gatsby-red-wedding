import styled from 'styled-components'
import tw from 'twin.macro'
import PropTypes from 'prop-types';

const defaultText = 'Please pass text as a prop'

export const Subtitle = styled.h6.attrs( props => ({
    className: 'card-subtitle',
    children: `${props.text ? props.text : defaultText}`
}))`

 ${
     tw`
        mb-2
     `
 }

font-weight: 500;
line-height: 1.2;

`


Subtitle.propTypes = {
    text: PropTypes.string.isRequired
}