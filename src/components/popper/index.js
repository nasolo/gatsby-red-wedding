import React from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { TippyBox, TippyWrapper } from './style';
import { useSpring, motion } from "framer-motion";


export const Popper = ({children, html, visible, hide, trigger}) => {

  const springConfig = {damping: 15, stiffness: 300}
  const initialScale = 0.5
  const opacity = useSpring(0, springConfig)
  const scale = useSpring(initialScale, springConfig)
  const handleOnClickOutside = () => visible && hide()

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange(value => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }

    return (
      <Tippy
        html={true}
        interactive={true}
        visible={visible}
        animation={true}
        onMount={onMount}
        onHide={onHide}
        trigger={trigger}
        onClickOutside ={handleOnClickOutside}
        render={attrs => (
          <TippyBox 
            as={motion.div} 
            style={{opacity, scale}}
            {...attrs} 
            
          >
              <TippyWrapper>
                  {html}
                </TippyWrapper>
          </TippyBox>
        )}
        
      >
        {children}
      </Tippy>
    )
}