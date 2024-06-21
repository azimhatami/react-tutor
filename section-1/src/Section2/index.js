import React from 'react'

const Section2 = () => {
    const classes = [
        {name: 'html', finished: true},
        {name: 'css', finished: false},
        {name: 'javascript', finished: true},
        {name: 'react', finished: false},
    ]
  return (
    <div>
        {
            classes.map((c, index) => {
                return c.finished && <h2 key={index}>{c.name}</h2>
            })
        }
    </div>
  )
}

export default Section2