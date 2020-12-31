import React from 'react'
import { Link } from 'gatsby'
import { useWpMenues } from '../../graphql'
import PropTypes from "prop-types"
import { Icon } from '../'

export const NavLinks = ({slug, icons, ...rest}) => {


    // import graphql menu items filted by slug
    const nodes = useWpMenues(slug)

    //filter out the menu node

    const shouldRenderIcon = icons !== undefined



    
    return (
        <>
            { nodes && nodes.map(menu => {
            return (
                    <Link 
                        to={menu.url}
                        key={`${menu.id}-${menu.label}`}
                        className={`order-${menu.order} my-auto h-1/5 py-2`}
                    >
                        {shouldRenderIcon && icons.map(icon => {
                            return menu.url.includes(icon.url) && <Icon icon={icon.icon} className="pr-2" key={`icon-${icon.icon}`} {...rest}/>
                        })}
                        
                        { menu.label }
                    </Link>
                )
            })}   
       </>
    )
}



NavLinks.propTypes = {
    slug: PropTypes.string,
    icons: PropTypes.array
  }



