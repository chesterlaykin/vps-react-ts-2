export function LayoutTest({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          display: 'flex',
          maxWidth: 900,
          margin: 'auto'
        }}
      >
        <p><strong>Layout Test 1</strong></p>
        {children}
      </div>
    )
  }