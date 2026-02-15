import { useState } from "react";
import "../CSsModules/navbar.css";
import {
  AudioLines,
  CloudyIcon,
  KeyRound,
  KeyRoundIcon,
  MessageCircle,
  MessageCircleMoreIcon,
  MessageCircleOff,
  MessageSquareShare,
  MonitorCloudIcon,
  NotebookTabs,
  Send,
  SmartphoneNfc,
  TabletSmartphoneIcon,
  TvMinimalIcon,
  UserCog2Icon,
  VoicemailIcon,
} from "lucide-react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const redirectToVoicePanel = () => {
    var elem = document.createElement("a");
    elem.href = "http://voice.meghtalk.com/login.php";
    elem.click();
  };
  return (
    <div className="navbar-base">
      <header className="navbar-header">
        <div className="navbar-logo">
          <img
            src={logo}
            width={"150rem"}
            height={"100em"}
            alt="MeghTalk Logo"
          />
        </div>

        <nav className="navbar-nav">
          <div className="navbar-dropdown" id="Products">
            <button className="navbar-link-button">Products</button>
            <div className="navbar-products-List">
              <ul>
                <li className="navbar-product-item">
                  <AudioLines /> Voice Api
                </li>
                <li className="navbar-product-item">
                  <MessageCircle /> Sms & Messaging
                </li>
                <li className="navbar-product-item">
                  <SmartphoneNfc /> Sip Trunking
                </li>
                <li className="navbar-product-item">
                  <NotebookTabs /> Virtual Numbers
                </li>
                <li className="navbar-product-item">
                  <VoicemailIcon /> Call Recordings
                </li>
                <li className="navbar-product-item">
                  <Send />
                  Bulk SMS
                </li>
                <li className="navbar-product-item">
                  <MessageCircleMoreIcon /> Bulk WhatsApp
                </li>
                <li className="navbar-product-item">
                  <MessageSquareShare /> RCS
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-dropdown" id="Solutions">
            <button className="navbar-link-button">Solutions</button>
            <div className="navbar-products-List" id="SolutionsList">
              <ul>
                <li className="navbar-product-item">
                  <KeyRoundIcon /> Otp & Authentication
                </li>
                <li className="navbar-product-item">
                  <UserCog2Icon /> Contact Centers
                </li>
                <li className="navbar-product-item">
                  <CloudyIcon /> Unified Communications
                </li>
                <li className="navbar-product-item">
                  <NotebookTabs /> Enterprise Telephony
                </li>
                <li className="navbar-product-item">
                  <TabletSmartphoneIcon /> Mobile App
                </li>
                <li className="navbar-product-item">
                  <MonitorCloudIcon />
                  Software Development
                </li>
                <li className="navbar-product-item">
                  <TvMinimalIcon /> Digital Marketing Solutions
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-dropdown">
            <button className="navbar-link-button">Careers</button>
          </div>
          <div className="navbar-dropdown">
            <button className="navbar-link-button">Company</button>
          </div>
          <div className="navbar-dropdown">
            <button className="navbar-link-button">Contact</button>
          </div>
        </nav>

        <div>
          <button className="navbar-secondary" onClick={redirectToVoicePanel}>
            Login
          </button>
          <button className="navbar-primary">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
