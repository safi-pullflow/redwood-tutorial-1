import { render } from '@redwoodjs/testing/web'

import AdminPortalPage from './AdminPortalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminPortalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminPortalPage />)
    }).not.toThrow()
  })
})
