import React from 'react'
import { Brand } from '..'
import { Container, SiteHeader, Flex, Hamburger } from '../../elements'
import { MobileHeader, SiteMobileHeader, MobileChatMenu } from '../../elements/mobileHeaderElements'
import { NavLinks, SideDrawer } from '..'
import { useCycle } from 'framer-motion'




const Header = props => {


  const menuIcons = [{
    url: 'chat-live',
    icon: 'person'
  }]

  const [ isOpen, toggleDrawer ] = useCycle(false, true)

  return (
    <SiteHeader>
      <SiteMobileHeader>
          <MobileHeader>
            <Container>
                <Flex align="center" >
                  <Brand />
                  <MobileChatMenu>
                      <NavLinks slug={"contact"} icons={menuIcons} fill="white"/>
                  </MobileChatMenu>
                    <Hamburger toggle={toggleDrawer} isOpen={isOpen}/>
                  <SideDrawer isOpen={isOpen} toggle={toggleDrawer}/>
                </Flex>
              </Container>
          </MobileHeader>
      </SiteMobileHeader>
    </SiteHeader>
  )
}


export default Header