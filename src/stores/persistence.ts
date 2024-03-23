import { useEffect } from 'react'
import { GuestBookStore, setVisitors } from 'stores/guestbook'
import { TVisitorStore } from 'types'

const STORAGE_KEY = 'GuestBook.visitors'

export const useLocaleStoragePersistence = () => {
  useEffect(() => {
    const visitorsString = localStorage.getItem(STORAGE_KEY)
    if (visitorsString) {
      const visitors = JSON.parse(visitorsString) as TVisitorStore[]
      setVisitors(visitors)
    }

    const unsubscribe = GuestBookStore.subscribe(
      (s) => s.visitors,
      (visitors) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(visitors))
      },
    )

    return () => unsubscribe()
  }, [])
}
