function About() {
  return (
    <section style={styles.about}>
      <h2>About Us</h2>
      <p>
        We are a cloud-native telecommunications provider delivering
        programmable communication infrastructure to enterprises, startups, and
        system integrators.
      </p>
      <p>
        Our platform is built for compliance, security, and performance —
        enabling seamless integration with modern backend systems and workflows.
      </p>
    </section>
  );
}

const styles = {
  about: {
    padding: "4rem 2rem",
    background: "#f9fafb",
    textAlign: "center",
  },
};

export default About;
