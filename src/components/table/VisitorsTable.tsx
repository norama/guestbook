import { GuestBookStore } from 'stores'

const VisitorsTable = () => {
  const visitors = GuestBookStore.useState((s) => s.visitors)

  return <pre>{JSON.stringify(visitors, null, 2)}</pre>
}

export default VisitorsTable
