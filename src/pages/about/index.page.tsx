import './code.css'

export { Page }

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}

export const documentProps = {
  title: 'About',
  description: 'Fun about page'
}
