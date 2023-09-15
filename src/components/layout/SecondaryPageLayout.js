import React from "react"
import { BaseLayout } from "components"

export function SecondaryPageLayout({
  children,
  title,
  backgroundIcon,
  ...props
}) {
  return (
    <BaseLayout
      title={title}
      renderBeforeMain={() =>
        backgroundIcon && backgroundIcon.svg ? (
          <div
            className="hidden absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10 lg:block dark:text-brown-100"
            dangerouslySetInnerHTML={{
              __html: backgroundIcon.svg.svg,
            }}
          ></div>
        ) : (
          <div className="hidden absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10 lg:block dark:text-brown-100">
            {React.createElement(backgroundIcon)}
          </div>
        )
      }
      {...props}
    >
      {children}
    </BaseLayout>
  )
}
