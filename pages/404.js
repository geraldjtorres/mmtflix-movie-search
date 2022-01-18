import Layout from '@/components/Layout'
import { Styled404 } from '@/components/styles/404.styled'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
export default function NotFoundPage() {
  return (
    <>
      <Layout>
        <>
          <Styled404>
            <h1>
              <FaExclamationTriangle /> 404
            </h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href='/'>Go back home</Link>
          </Styled404>
        </>
      </Layout>
    </>
  )
}
