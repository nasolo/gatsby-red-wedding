
const sliderTransition={
    type: "spring", stiffness: 300, damping: 200, mass: 10,
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
      opacity: 1,
      transition: {
        ...sliderTransition
      }
    },
    exit: (direction) => {
      return {
        
        x: direction < 0 ? "-100%" : "100%",
        opacity: 0,
        transition: {
          ...sliderTransition
        }
      };
    }
  };
