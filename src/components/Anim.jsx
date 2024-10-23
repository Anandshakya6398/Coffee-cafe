import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Anim() {
  return (
    <AnimatedCursor 
    innerSize={15}
      outerSize={40}
    //   color='183, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} 
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
  )
}

export default Anim
