export function Layout1({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: 900,
          margin: 'auto'
        }}
      >
         <p><strong>Layout 1</strong></p>
        {children}
      </div>
    )
  }