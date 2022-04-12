import React from "react"
import { Link } from "components"

export function PostCategories({ tags }) {
  return (
    <div className="mt-12">
      <p>
        <em className="mr-4">Find related posts:</em>

        {tags.map(tag => (
          <Link key={tag} to={`/blog/${tag}`} className="mr-2 BlogPost-tag">
            {tag}
          </Link>
        ))}
      </p>
    </div>
  )
}
