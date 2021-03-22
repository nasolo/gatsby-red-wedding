import React from 'react'
import { Icon } from '../../../components';
import { ShareIconsWrapper } from '../style'




const ShareIcon = (icon) => (
    <Icon icon={icon} key={icon} size={'large'} height={'1.5rem'} fill="rgba(204,204,204,.7)"/>
)



export const ShareGallery = ({
    icons = ['star', 'paperplane']
}) => {


    return (
        <ShareIconsWrapper>
            {icons.map(icon => ShareIcon(icon))}
        </ShareIconsWrapper>
    )

}