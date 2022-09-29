export function Layout1({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: 900,
          margin: 'auto'
        }}
      >
        {children}
      </div>
    )
  }