import React from "react"
import { BaseLayout } from "components"

export function TertiaryPageLayout({ children, title, ...props }) {
  return (
    <BaseLayout title={title} {...props}>
      {children}
    </BaseLayout>
  )
}
