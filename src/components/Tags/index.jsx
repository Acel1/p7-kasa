import React from "react"

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <li className='tag'>{tag}</li>
      ))}
    </>
  )
}

export default Tags
