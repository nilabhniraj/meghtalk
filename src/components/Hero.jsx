function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Cloud Communications, Built for Scale</h1>
      <p>
        Reliable voice, messaging, and telephony APIs powering modern businesses
        worldwide.
      </p>
      <div>
        <button style={styles.primary}>Get Started</button>
        <button style={styles.secondary}>Talk to Sales</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "5rem 2rem",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#ffffff",
  },
  primary: {
    padding: "0.8rem 1.5rem",
    marginRight: "1rem",
    border: "none",
    background: "#38bdf8",
    color: "#000",
    fontWeight: "600",
    cursor: "pointer",
  },
  secondary: {
    padding: "0.8rem 1.5rem",
    border: "1px solid #38bdf8",
    background: "transparent",
    color: "#38bdf8",
    cursor: "pointer",
  },
};

export default Hero;
