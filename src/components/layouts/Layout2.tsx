export function Layout2({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: 900,
          margin: 'auto'
        }}
      >
         <p><strong>Layout 2</strong></p>
        {children}
      </div>
    )
  }