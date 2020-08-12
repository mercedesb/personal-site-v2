import React from "react"
import { Link } from "gatsby"

export function TalkListItem({
  title,
  className,
  urlSegment,
  iconSvg,
  iconCssClass,
  index,
}) {
  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/3 flex py-2 md:pr-3 ${
        index % 3 !== 0 ? "md:pl-3" : ""
      }`}
    >
      <Link
        className={`border-8 flex flex-col p-4 items-center no-underline justify-between w-full ${iconCssClass} ${className}`}
        to={`/speaking/${urlSegment}`}
      >
        <div
          className={`w-1/2 mt-4 mb-2`}
          dangerouslySetInnerHTML={{
            __html: iconSvg,
          }}
        ></div>
        <h3 className="text-xl lg:text-2xl text-center m-2">{title}</h3>
      </Link>
    </div>
  )
}
