import { HaMonogram } from "./ha-monogram";

const gridLines = Array.from({ length: 12 }, (_, index) => index);

export function SocialCard() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#0a192f",
        color: "#f7f4ed",
        fontFamily: "sans-serif",
      }}
    >
      {gridLines.map((line) => (
        <div
          key={`vertical-${line}`}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: line * 108,
            width: 1,
            backgroundColor: "rgba(89, 225, 212, 0.08)",
          }}
        />
      ))}
      {gridLines.slice(0, 7).map((line) => (
        <div
          key={`horizontal-${line}`}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: line * 105,
            height: 1,
            backgroundColor: "rgba(89, 225, 212, 0.08)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: 54,
          right: 62,
          width: 176,
          height: 176,
          border: "1px solid rgba(89, 225, 212, 0.18)",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "64px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HaMonogram size={92} />
          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 24,
              letterSpacing: 1,
            }}
          >
            heshamali.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Hesham Ali
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: "#59e1d4",
              fontSize: 42,
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              color: "#cbd5e1",
              fontSize: 30,
              lineHeight: 1.25,
            }}
          >
            Backend · Integrations · WordPress · E-commerce
          </div>
        </div>
      </div>
    </div>
  );
}
