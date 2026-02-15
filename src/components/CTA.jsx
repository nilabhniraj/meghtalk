function CTA() {
  return (
    <section style={styles.cta}>
      <h2>Ready to Modernize Your Communications?</h2>
      <p>Start building with our APIs or speak with a solutions architect.</p>
      <button style={styles.button}>Request Demo</button>
    </section>
  );
}

const styles = {
  cta: {
    padding: "4rem 2rem",
    textAlign: "center",
    background: "#0f172a",
    color: "#ffffff",
  },
  button: {
    marginTop: "1rem",
    padding: "0.9rem 2rem",
    background: "#38bdf8",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default CTA;
