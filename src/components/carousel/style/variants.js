
const sliderTransition={
    type: "spring", mass: 10, stiffness: 300, damping: 100,
    opacity: { duration: .5 }
  }
  

export const carouselVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        transition: {
          ...sliderTransition
        }
      };
    },
    center: {
     
      x: 0,
      zIndex: 1,
      opacity: 1,
      transition: {
        ...sliderTransition
      }
    },
    exit: (direction) => {
      return {
        
        x: direction < 0 ? "-100%" : "100%",
        zIndex: 0,
        opacity: 0,
        transition: {
          ...sliderTransition
        }
      };
    }
  };
