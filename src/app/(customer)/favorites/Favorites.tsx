'use client'

import Catalog from "@/src/components/ui/catalog/Catalog"
import Layout from "@/src/components/ui/layout/Layout"
import { useProfile } from "@/src/hooks/useProfile"

interface Props {}

export function Favorites({}: Props) {
    const { profile } = useProfile()

    return (
        <Layout>
            <Catalog products={profile?.favorites || []} title="Favorites" />
        </Layout>
    )
}
