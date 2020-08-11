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
        backgroundIcon && (
          <div
            className="hidden absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10 lg:block"
            dangerouslySetInnerHTML={{
              __html: backgroundIcon.svg.svg,
            }}
          ></div>
        )
      }
      {...props}
    >
      {children}
    </BaseLayout>
  )
}
