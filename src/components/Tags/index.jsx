import React from "react"

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <li key={index} className='tag'>
          {tag}
        </li>
      ))}
    </>
  )
}

export default Tags
