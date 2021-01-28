import styled from 'styled-components'
import tw from 'twin.macro'
import PropTypes from 'prop-types';

const defaultText = 'Please pass text as a prop'

export const Text = styled.p.attrs( props => ({
    className: 'card-text',
    children: `${props.text ? props.text : defaultText}`
}))`

 ${
     tw`
        mt-0
        mb-4
     `
 }
`


Text.propTypes = {
    text: PropTypes.string.isRequired
}