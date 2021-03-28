import React from 'react'
import { Icon } from '../icon'
import { Media } from './style/media'
import { MediaBody } from './style/body'
import { MediaHeading } from './style/heading'
import { MediaText } from './style/text'





export const IconBox = ({icon, heading, description}) => {

    return (
        <Media key={`${icon}-${heading}-mediabox`}>
            {icon && <Icon size={`large`} icon={icon} fill={'white'} m={`auto`}/>}
            <MediaBody>
                {heading && <MediaHeading heading={heading} key={heading}/>}
                {description && <MediaText description={description} key={`${heading}-description`}/>}
            </MediaBody>
        </Media>
    )

}