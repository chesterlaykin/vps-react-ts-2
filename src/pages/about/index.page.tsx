
import { SomeTest } from '@/components/common/SomeTest'
import './code.css'

export { Page }

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
       <SomeTest/>
    </>
  )
}

export const documentProps = {
  title: 'About',
  description: 'Fun about page'
}
