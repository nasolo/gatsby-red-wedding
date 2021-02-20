import React from 'react'
import { Body, Card as PageCard, Subtitle, Text, Title } from '../../elements/card'
import Img from "gatsby-image"
import { Container } from '../../elements/container'
import { motion } from 'framer-motion'



const transition={
    type: "spring", 
    stiffness: 300, 
    damping: 200,
    mass: 10,
    opacity: { 
       duration: 1 
   },
 }

const variants = {
    show:i => ({
        x: 0,
        opacity: 1,
        transition: {
            ...transition,
            delay: i * 0.5
        }
    }),
    hidden: i =>({
        x: -20,
        opacity: 0,
        transition: {
            ...transition,
           
        }
    })
}

const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06, delayChildren: 1 } },
  }
    


const letterVariants = {
    before: {
      opacity: 0,
      x: -20,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
          
      },
    },
    after: {
      opacity: 1,
      x: 0,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
          
      },
    }    
  }


  const itemMotionConfig = {
    initial:"hidden",
    animate:"show",
    exit:"hidden",
    variants: variants
  }




export const Card = ({
    id, 
    fluid, 
    alt = "The Red Wedding", 
    title, 
    heading, 
    subHeading, 
    overview,
    settings,
    justifyContent,
    overlay = true,
    ...rest
}) => {


    return (
       <PageCard 
            as={motion.div} 
            {...rest} 
            key={`page-card-${id}-${alt}`}
            initial="hidden"
            animate="show"
            exit="hidden"
            
        >
           <Img fluid={fluid} alt={alt} key={`gatsby-img-${alt}`} className="h-full"/>
               <Body 
                    overlay={overlay} 
                    key={`page-body-${id}`} 
                    justifyContent={justifyContent}
                    as={motion.div}
                    {...itemMotionConfig}
                >
                    <Container 
                        as={motion.div}
                        animate={ "after" }
                        exit={ "before" }
                        variants={containerVariants}
                        key="card-container"
                    >
                        <Subtitle text={heading} {...itemMotionConfig}/>
                        <motion.div
                            initial={ "before" }
                            animate={ "after" }
                            exit={ "before" }
                            variants={containerVariants}
                            key="card-title-container"
                        >
                            <Title text={title} {...itemMotionConfig}/>
                        </motion.div>
                        
                        <Subtitle text={subHeading} {...itemMotionConfig}/>
                        <Text text={overview} {...itemMotionConfig}/>
                    </Container>
               </Body>
       </PageCard>
    )
}


