import React from 'react'
import { Paragraph } from '../../elements'

export const Copyright = (props) => {

    const msg = "©2021 All Rights Reserved. Work property of individual clients.  Please do not reproduce"

    return (
        <Paragraph text={msg} {...props} />
    )
}