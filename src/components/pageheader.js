import * as React from "react"

const PageHeader = ({ title }) => {
  return (
    <div className="py-12 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center max-w-md sm:max-w-full px-4 mx-auto ">
        {title}
      </h1>
    </div>
  )
}

export default PageHeader
