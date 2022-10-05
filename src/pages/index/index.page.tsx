import { SomeTest } from '@/components/common/SomeTest'
import { Counter } from './Counter'
// import {myFunc} from 'functions/oneFunction';
// import pkJson from '/package.json';

export { Page }

function Page() {
  return (
    <>
      <h1>VPS-react-ts-2</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <SomeTest />
      {/* <p>Msg: {myFunc()}</p> */}
    </>
  )
}

export const documentProps = {
  title: 'VPS-react-ts-2 (Vite-plugin-ssr with react + typescript)',
  description: 'Testings with VPS'
}
