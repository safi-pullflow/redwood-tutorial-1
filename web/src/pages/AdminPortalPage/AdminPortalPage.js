import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPortalPage = () => {
  return (
    <>
      <MetaTags title="AdminPortal" description="AdminPortal page" />
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
      </header>
    </>
  )
}

export default AdminPortalPage
