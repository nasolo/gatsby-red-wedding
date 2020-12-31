import styled from 'styled-components'
import PropTypes from 'prop-types';
import { ComposeBoxHelper } from '../utils'

export const Paragraph = styled.p.attrs(props => ({
    className: 'copyright',
    children: props.text
}))`
${ComposeBoxHelper};


`


Paragraph.propTypes = {
    text: PropTypes.string.isRequired
}


