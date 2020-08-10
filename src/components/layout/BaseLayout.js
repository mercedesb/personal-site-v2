import React from "react"
import { Nav } from "components"

export function BaseLayout({
  title,
  children,
  renderBeforeMain,
  renderAfterMain,
  renderBeforeHeader,
  renderAfterHeader,
  renderFooter,
  renderBeforeFooter,
  renderAfterFooter,
  mainClassName,
  headerClassName,
  footerClassName,
}) {
  return (
    <div className="px-24 py-12">
      <div>
        <Nav />
      </div>
      <div className="relative">
        {renderBeforeHeader && renderBeforeHeader()}
        <header className={`${headerClassName}`}>
          <h2 className="my-0 text-6xl">{title}</h2>
        </header>
        {renderAfterHeader && renderAfterHeader()}
        {renderBeforeMain && renderBeforeMain()}
        <div className="flex justify-between">
          <main className={`pr-16 py-8 w-3/5 ${mainClassName}`}>
            {children}
          </main>
          {renderAfterMain && renderAfterMain()}
        </div>
      </div>
      {renderBeforeFooter && renderBeforeFooter()}
      {renderFooter && (
        <footer className={`${footerClassName}`}>{renderFooter()}</footer>
      )}
      {renderAfterFooter && renderAfterFooter()}
    </div>
  )
}
