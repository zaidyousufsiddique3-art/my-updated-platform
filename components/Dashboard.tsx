type DashboardProps = {
  user: {
    email?: string;
    [key: string]: any;
  };
  onLogout: () => void;
};

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const displayName = user.email || "User";

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          background: "#0f172a",
          color: "white",
          padding: "20px 16px",
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 24 }}>Dashboard</h2>

        <nav>
          <button
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 8,
              padding: "8px 10px",
              borderRadius: 6,
              border: "none",
              background: "#1e293b",
              color: "white",
              cursor: "pointer",
            }}
          >
            Home
          </button>
          <button
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 8,
              padding: "8px 10px",
              borderRadius: 6,
              border: "none",
              background: "#1e293b",
              color: "white",
              cursor: "pointer",
            }}
          >
            Create Proposal
          </button>
          <button
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 8,
              padding: "8px 10px",
              borderRadius: 6,
              border: "none",
              background: "#1e293b",
              color: "white",
              cursor: "pointer",
            }}
          >
            My Proposals
          </button>
          <button
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 8,
              padding: "8px 10px",
              borderRadius: 6,
              border: "none",
              background: "#1e293b",
              color: "white",
              cursor: "pointer",
            }}
          >
            Settings
          </button>
        </nav>

        <hr style={{ margin: "16px 0", borderColor: "#1f2937" }} />

        <button
          onClick={onLogout}
          style={{
            marginTop: 8,
            padding: "8px 10px",
            width: "100%",
            borderRadius: 6,
            border: "none",
            background: "#b91c1c",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          background: "#0b1120",
          color: "white",
          padding: "24px 28px",
        }}
      >
        {/* Top bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <div>
            <h1 style={{ fontSize: 24, marginBottom: 4 }}>
              Welcome, {displayName}
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 14 }}>
              This is your main workspace after login.
            </p>
          </div>
        </header>

        {/* Cards */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(14,116,144,0.3))",
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <h3 style={{ marginBottom: 6, fontSize: 18 }}>
              Create a Proposal
            </h3>
            <p style={{ fontSize: 14, color: "#e5e7eb", marginBottom: 10 }}>
              Start a new proposal for your client using your saved template and
              details.
            </p>
            <button
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              New Proposal
            </button>
          </div>

          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <h3 style={{ marginBottom: 6, fontSize: 18 }}>My Proposals</h3>
            <p style={{ fontSize: 14, color: "#e5e7eb", marginBottom: 10 }}>
              View, download, or manage the proposals you’ve generated.
            </p>
            <button
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              View Proposals
            </button>
          </div>

          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <h3 style={{ marginBottom: 6, fontSize: 18 }}>Account</h3>
            <p style={{ fontSize: 14, color: "#e5e7eb" }}>
              Logged in as: <strong>{displayName}</strong>
            </p>
          </div>
        </section>

        {/* Placeholder for future proposal generator */}
        <section
          style={{
            marginTop: 8,
            padding: 16,
            borderRadius: 12,
            border: "1px dashed rgba(148,163,184,0.5)",
            background: "rgba(15,23,42,0.8)",
          }}
        >
          <h3 style={{ marginBottom: 8, fontSize: 18 }}>
            Proposal Generator Area
          </h3>
          <p style={{ fontSize: 14, color: "#d1d5db" }}>
            Here we can later plug in your actual proposal generator form, PDF
            preview, and save/download options.
          </p>
        </section>
      </main>
    </div>
  );
}
