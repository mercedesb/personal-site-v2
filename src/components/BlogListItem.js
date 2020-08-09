import React from "react"
import PropTypes from "prop-types"

export function BlogListItem({ title, description }) {
  return (
    <a href="#" className="flex mb-16 no-underline">
      <h3 className="w-1/2 my-0 mr-16 text-2xl underline">{title}</h3>
      <p className="">{description}</p>
    </a>
  )
}

BlogListItem.propTypes = {}
