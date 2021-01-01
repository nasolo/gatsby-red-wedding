import React from 'react'
import { Brand } from '..'
import { Container, Flex, Hamburger } from '../../elements'
import { MobileHeaderWrapper, SiteMobileHeader, MobileChatMenu } from '../../elements/mobileHeaderElements'
import { NavLinks, SideDrawer } from '..'
import { useCycle } from 'framer-motion'




const MobileHeader = props => {


  const menuIcons = [{
    url: 'chat-live',
    icon: 'person'
  }]

const [ isOpen, toggleDrawer ] = useCycle(false, true)

  return (
      <SiteMobileHeader>
          <MobileHeaderWrapper>
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
          </MobileHeaderWrapper>
      </SiteMobileHeader>
  )
}


export default MobileHeader