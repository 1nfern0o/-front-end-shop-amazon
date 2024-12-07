import Layout from '@/src/components/ui/layout/Layout'
import Heading from '@/src/components/ui/Heading'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Layout>
            <Heading>Not Found</Heading>
            <p>Could not find requested resource</p>
            <p>
                View{' '}
                <Link href="/explorer" className="text-primary">
                all products</Link>
            </p>
        </Layout>
    )
}
