import { Store } from 'pullstate'
import { TVisitor } from 'types'

interface IGuestBookStore {
  visitors: TVisitor[]
}

export const GuestBookStore = new Store<IGuestBookStore>({
  visitors: [],
})
