import React from "react"
import { BaseLayout } from "components"

export function TertiaryPageLayout({ children, title }) {
  return <BaseLayout title={title}>{children}</BaseLayout>
}
