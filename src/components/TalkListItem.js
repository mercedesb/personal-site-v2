import React from "react"
import { Link } from "components"

export function TalkListItem({
  title,
  className,
  urlSegment,
  iconSvg,
  iconOrientation,
  iconCssClass,
  index,
}) {
  let iconClassname
  if (iconOrientation === "square" || iconOrientation === "portrait") {
    iconClassname = "w-1/2 mt-4 mb-2"
  } else if (iconOrientation === "landscape") {
    iconClassname = "w-3/4 mt-8 mb-2"
  }

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
          className={iconClassname}
          dangerouslySetInnerHTML={{
            __html: iconSvg,
          }}
        ></div>
        <h3 className="text-xl lg:text-2xl text-center m-2">{title}</h3>
      </Link>
    </div>
  )
}
