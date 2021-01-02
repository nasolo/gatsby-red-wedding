import React from 'react'
import { SiteHeader } from '../../elements'
import { DesktopHeader } from '../'
import MobileHeader from '../mobileHeader'

export const Header = props =>{
    return(
       <SiteHeader>
           <MobileHeader/>
           <DesktopHeader />
       </SiteHeader> 
    )
}