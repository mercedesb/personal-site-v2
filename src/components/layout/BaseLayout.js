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
  containerClassName,
  mainClassName,
  headerClassName,
  footerClassName,
}) {
  return (
    <div className="px-8 pt-4 md:px-12 md:pt-12 lg:px-24">
      <div>
        <Nav />
      </div>
      <div className={`relative ${containerClassName}`}>
        {renderBeforeHeader && renderBeforeHeader()}
        <header className={`pt-6 ${headerClassName}`}>
          <h2 className="my-0 lg:text-6xl">{title}</h2>
        </header>
        {renderAfterHeader && renderAfterHeader()}
        <div className="flex flex-wrap justify-between">
          {renderBeforeMain && renderBeforeMain()}
          <main className={`w-full lg:pr-16 py-8 lg:w-3/5 ${mainClassName}`}>
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
