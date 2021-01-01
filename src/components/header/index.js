import React from 'react'
import { SiteHeader } from '../../elements'
import MobileHeader from '../mobileHeader'

export const Header = props =>{
    return(
       <SiteHeader>
           <MobileHeader/>
       </SiteHeader> 
    )
}