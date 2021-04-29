import { PropertyLinkSearch } from "app/client/widgets/basic"
import React from "react"
import { Page } from "../NotFoundStyle"

export default () => {
  return (
    <Page>
      <p className="n-title"><span>(404)</span> Page Moved or Not Found</p>
      <p className="n-dec">The page you are looking for has either moved, or is no longer available.</p>
      <div className="n-content">
        <p className="n-search">Search for <span>real estates</span> in the area</p>
        <PropertyLinkSearch />
      </div>
    </Page>
  )
}