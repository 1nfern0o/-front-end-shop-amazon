import Heading from '@/app/components/ui/Heading'
import Layout from '@/app/components/ui/layout/Layout'
import Meta from '@/app/components/ui/Meta'
import { NextPage } from 'next'

const ThanksPage: NextPage = () => {
  return (
    <Meta title="Thanks">
      <Layout>
        <Heading>Thanks!</Heading>
      </Layout>
    </Meta>
  )
}

export default ThanksPage
