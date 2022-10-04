import { SomeTest } from '@/components/common/SomeTest'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <SomeTest />
    </>
  )
}

export const documentProps = {
  title: 'VPS-react-ts-2 (Vite-plugin-ssr with react + typescript)',
  description: 'Testings with VPS'
}
