const handleOnDragEnd = ( settings ) =>{
    const { 
        event, 
        info: {offset, velocity}, 
        next, 
        prev,
    } = settings
    
    const swipeConfidenceThreshold = 1000;
    const swipePower = Math.abs(offset.x) * velocity.x
    const isRightSwipe = swipePower > swipeConfidenceThreshold
    const isLeftSwipe = swipePower < -swipeConfidenceThreshold
    
    
        if(isRightSwipe){
            return next()
        } else if(isLeftSwipe){
            return prev()
        }
       
    
}

export default handleOnDragEnd