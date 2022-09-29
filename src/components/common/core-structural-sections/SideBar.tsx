import { Logo } from "@/components/common/core-structural-sections/vps/Logo";

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          padding: 20,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: "1.8em",
        }}
      >
        <Logo />
        
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/about">
          About
        </Link>
        {children}
      </div>
    );
  }