import React from 'react';
import { cva } from '../../../styled-system/css';
 
const button = cva({
  base: {
    display: 'flex'
  },
  variants: {
    visual: {
      solid: { bg: 'red.200', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.200' }
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' }
    }
  }
})

const Button = () => {
    return (
        <div>
            <button className={button({ visual: 'solid', size: 'lg' })}>click me</button>
            <button className={button({ visual: 'outline', size: 'sm' })}>or me</button>
        </div>
    )
}

export default Button