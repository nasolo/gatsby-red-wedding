import styled from 'styled-components'
import { Box } from '../../../elements'





export const MediaText = styled(Box).attrs(props => ({
    as: 'p',
    className: 'media-box-text',
    children: props.description
}))`



`

MediaText.defaultProps = {
    mt: 0
}


