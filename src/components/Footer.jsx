import "../CSsModules/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-column-title">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
            <div>Careers</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CloudComm. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
