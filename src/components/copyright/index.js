import React from 'react'
import { Paragraph } from '../../elements'
import { useGetCopyrightNotice } from '../../graphql'

export const Copyright = (props) => {

    const msg = useGetCopyrightNotice()

    return (
        <Paragraph text={msg.copyrightNotice} {...props} />
    )
}