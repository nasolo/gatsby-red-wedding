import React from 'react'
import Img from "gatsby-image"


import { IMAGE_EXTENSTIONS } from './patterns'
import { VideoPlayer } from '../videoPlayer';



const getGatsbyImageFluid = (localFile) => {
    const shouldRenderImage = localFile.hasOwnProperty('childImageSharp')

    if(!shouldRenderImage) return

    const fluid = localFile.childImageSharp.fluid

    return fluid
}

const isImage = ({mimeType, mediaItemUrl}) => {

    if(!mimeType.includes('image')) return false

    if(typeof mediaItemUrl === 'string'){
        return IMAGE_EXTENSTIONS.test(mediaItemUrl)
    }
} 

const isVideo = ({mimeType, mediaItemUrl}) => {
    if(!mimeType.includes('video')) return false
    if(typeof mediaItemUrl === 'string'){
        return VideoPlayer.canPlay(mediaItemUrl)
    }
}



export const Media = (props) => {

    const { mediaItemUrl, mimeType, localFile, id, alt, poster} = props

    const renderSourceElement = () => {

        if(mediaItemUrl === undefined) return

        const shouldRenderVideo = isVideo({mediaItemUrl, mimeType})
        const shouldRenderImage = isImage({mediaItemUrl, mimeType})
        const fluidImage = shouldRenderImage && getGatsbyImageFluid(localFile)

        if(shouldRenderVideo) {
            return <VideoPlayer url={mediaItemUrl} id={id} poster={poster}/>
        }

        if(shouldRenderImage) {
            return <Img fluid={fluidImage} key={`gatsby-img-${id}`} alt={alt} className="h-full"/>
        }

        return "not media"
    
    }

  return( 
     <>
        {renderSourceElement()}
    </>
  )
   
}