import { Store } from 'pullstate'
import type { TVisitorStore } from 'types'

interface IGuestBookStore {
  visitors: TVisitorStore[]
}

export const GuestBookStore = new Store<IGuestBookStore>({
  visitors: [],
})
