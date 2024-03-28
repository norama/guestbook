import { Store } from 'pullstate'
import { v4 as uuid } from 'uuid'
import type { TVisitor, TVisitorStore } from 'types'

interface IGuestBookStore {
  visitors: TVisitorStore[]
}

export const GuestBookStore = new Store<IGuestBookStore>({
  visitors: [],
})

export const setVisitors = (visitors: TVisitorStore[]) => {
  GuestBookStore.update((s) => {
    s.visitors = [...visitors]
  })
}

export const addVisitor = (visitor: TVisitor) => {
  GuestBookStore.update((s) => {
    s.visitors = [{ ...visitor, id: uuid() }, ...s.visitors]
  })
}

export const removeVisitors = (ids: string[]) => {
  GuestBookStore.update((s) => {
    s.visitors = s.visitors.filter((visitor) => !ids.includes(visitor.id))
  })
}

export const checkVisitorEmail = (email: string) =>
  !GuestBookStore.getRawState().visitors.find((visitor) => visitor.email === email)
