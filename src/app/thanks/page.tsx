import type { Metadata } from 'next'
import Thanks from './Thanks'
import { NO_INDEX_PAGE } from '@/src/constants/app.constants'

export const metadata: Metadata = {
    title: 'Auth',
    ...NO_INDEX_PAGE
}

export default function ThanksPage() {
    return <Thanks />
}
