
import React from 'react'
import PropTypes from 'prop-types';

import { useSeoSocialLinks } from '../../graphql'
import { Icon } from '../icon'


export const SocialMediaLinks = ({exclude, className, ...rest}) => {

    const social  = useSeoSocialLinks()

    const filterExludedNetworks = exclude === undefined 
    ? social 
    : social.filter(social => !exclude.includes(social.network))

    return (
        <>
            {filterExludedNetworks.map(social => 
            <a 
                href={social.network === "twitter" ? `https://twitter.com/${social.username}` : social.url} 
                key={`${social.__typename}-anchor-link`}
                className={className}
            >
                <Icon 
                    icon={social.network} 
                    key={social.network} 
                    {...rest}
                />
            </a>
            )}
        </>
    )
}


SocialMediaLinks.propTypes ={
    exclude: PropTypes.oneOf([
        'facebook',
        'instagram',
        'linkedIn',
        'pinterest',
        'twitter',
        'youTube'
    ])
}