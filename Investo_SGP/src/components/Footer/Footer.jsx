import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="FooterSection">
        <div class="row">
          <div class="InvestoDetails" id="contact">
            <img src="home_logo.png"  width="180px" height="50" />
            <p class="FooterSection_Address1">Saffron Square</p>
            <p class="FooterSection_Address2">
              Bus-Stand Road, Opp. of Orchad Palace
            </p>
            <p class="FooterSection_Address3">Gondal - 360311</p>

            <div class="FooterSection_ContactSocialMedia">
              <div class="ContactUs">Contact Us - +91 9979052xxx</div>
              <a href="#contact1" class="SocialMedia_icon">
                <img
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/instagram_icon_groww.f8c7d006.svg"
                  height="20px"
                  width="30px"
                />
              </a>
              <a href="#contact1" class="SocialMedia_icon">
                <img
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fb_icon_groww.30532469.svg"
                  height="20px"
                  width="30px"
                />
              </a>
              <a href="#contact1" class="SocialMedia_icon">
                <img
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/twitter_icon_groww.43dee78a.svg"
                  height="20px"
                  width="30px"
                />
              </a>
              <a href="#contact1" class="SocialMedia_icon">
                <img
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/yt_icon_groww.ebd07f19.svg"
                  height="20px"
                  width="30px"
                />
              </a>
            </div>
          </div>
          <div class="FooterSection_Product">
            <h2>PRODUCT</h2>
            <div class="FooterSection_ProductList">Stocks</div>
            <div class="FooterSection_ProductList">Futures & Options</div>
            <div class="FooterSection_ProductList">Mutual Funds</div>
            <div class="FooterSection_ProductList">Fixed Deposite</div>
            <div class="FooterSection_ProductList">Us Stokes</div>
          </div>
          <div class="FooterSection_Investo">
            <h2>INVESTO</h2>
            <div class="FooterSection_InvestoList">About Us</div>
            <div class="FooterSection_InvestoList">Pricing</div>
            <div class="FooterSection_InvestoList">Blog</div>
            <div class="FooterSection_InvestoList">Media & Press</div>
            <div class="FooterSection_InvestoList">Carrees</div>
            <div class="FooterSection_InvestoList">Help & Support</div>
          </div>
          <div class="FooterSection_QuickLink">
            <h2>QUICK LINKS</h2>
            <div class="FooterSection_QuickLinkList">AMC Mutual Funds</div>
            <div class="FooterSection_QuickLinkList">Calculators</div>
            <div class="FooterSection_QuickLinkList">Glossary</div>
            <div class="FooterSection_QuickLinkList">Open Demat Account</div>
            <div class="FooterSection_QuickLinkList">Investo Digest</div>
            <div class="FooterSection_QuickLinkList">Investo Academy</div>
            <div class="FooterSection_QuickLinkList">Sitemap</div>
          </div>
        </div>

        <div class="horizontalLine"></div>

        <div class="InvestoFooterlast">
          <div class="InvestoCopyRight">
            © 2024Investo. All right reserved, Built with India-🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
