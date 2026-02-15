function Services() {
  const items = [
    {
      title: "Cloud Voice",
      desc: "Programmable voice APIs with global carrier-grade reliability.",
    },
    {
      title: "SMS & Messaging",
      desc: "High-throughput transactional and OTP messaging.",
    },
    {
      title: "SIP Trunking",
      desc: "Secure SIP connectivity with elastic scaling.",
    },
    {
      title: "Number Management",
      desc: "Local, toll-free, and international number provisioning.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2>Our Services</h2>
      <div style={styles.grid}>
        {items.map((s, i) => (
          <div key={i} style={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    padding: "1.5rem",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
  },
};

export default Services;
