import { NO_INDEX_PAGE } from '@/src/constants/app.constants'
import type { Metadata } from 'next'
import { Favorites } from './Favorites'

export const metadata: Metadata = {
    title: '',
    ...NO_INDEX_PAGE
}

export default function FavoritesPage() {
    return <Favorites />
}
