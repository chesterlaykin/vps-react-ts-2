import { Counter } from './Counter'
// import pkJson from '/package.json';
import './index.scss';

export { Page }

function Page() {
  return (
    <>
      <h1>VPS-react-ts-2</h1>
      This page is:
      <ul className='funny'>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <a href="/about">{'->'}About</a>
      {/* <SomeTest /> */}
      {/* <p>Msg: {myFunc()}</p> */}
    </>
  )
}

export const documentProps = {
  title: 'VPS-react-ts-2 (Vite-plugin-ssr with react + typescript)',
  description: 'Testings with VPS'
}
