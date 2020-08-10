import React from "react"
import { BaseLayout } from "components"

export function SecondaryPageLayout({ children, title, backgroundIcon }) {
  return (
    <BaseLayout
      title={title}
      renderAfterMain={() =>
        backgroundIcon && (
          <div
            className="absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10"
            dangerouslySetInnerHTML={{
              __html: backgroundIcon.svg.svg,
            }}
          ></div>
        )
      }
    >
      {children}
    </BaseLayout>
  )
}
