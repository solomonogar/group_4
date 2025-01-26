import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <main>
        <div className="banner">
          <div className="main-Container">
            <div className="gif"></div>
          </div>
          <div
            className="emoji-Main-Container"
            // style={{ backgroundColor: "blue" }}
          >
            <span className="emoji">&#128071;</span>
          </div>
        </div>
        <section className="first-section">
          <div className="about-wendy-container">
            <h1>
              I'm Wendy, a visual-turned-product designer with startup and
              agency experience. I help simplify complex user journeys to better
              serve users' stories.
            </h1>
            <p>
              Having lived in China, the UK, and the US in the past 20 years,
              I’ve developed a unique strength in decoding people's emotions
              from diverse backgrounds. As a designer, I want to use my creative
              juice to optimize and get people's stories out. After gaining a
              bachelor's in Communications Design from Pratt Institute in
              Brooklyn, I started my career in visual design at creative
              agencies. As much as I love storytelling for brands, I want to
              deliver practical solutions that address real human needs. This
              led me to pursue a Master's in Human-Computer Interaction at
              Carnegie Mellon. Since then, I've been immersed in the world of
              early-stage startups in the B2B SaaS space, bringing product
              visions to life.
            </p>
            <p>
              Currently I'm on the lookout for new full-time opportunities to
              contribute my design expertise to collaborative teams.
              <a href="mailto:juwendy98@gmail.com">
                <u>let's chat!</u>
              </a>{" "}
              ↗
            </p>
          </div>
          <div className="frame"></div>
        </section>
        <picture>
          <div className="pics-heading">
            <h2>
              When I'm not on Figma, I'm <br />
              probably on my camera:)
            </h2>
            <p>
              Not to brag, but I did code a &nbsp;
              <a
                href="https://wndina.github.io/pui-hw/FP/photography-main.html"
                target="_blank"
              >
                <u>responsive website</u>
              </a>
              ↗ to host my photography, check it out!
            </p>
          </div>
          <div className="main-flex">
            <div className="flex-container1">
              <div className="boxes box1"></div>
              <div className="boxes box2"></div>
            </div>
            <div className="flex-container2">
              <div className="boxes box3"></div>
              <div className="boxes box4"></div>
            </div>
            <div className="flex-container3">
              <div className="boxes box5"></div>
              <div className="boxes box6"></div>
            </div>
            <div className="flex-container4">
              <div className="boxes box7"></div>
              <div className="boxes box8"></div>
            </div>
          </div>
        </picture>
        <section class="last-section">
          <div class="emoji-container-1">
            <h2>Other things I enjoy</h2>
            <p>&#x1F5EF; Snowboarding &#127938;</p>
            <p>&#x1F5EF; Sci-fi & thrillers &#127916;</p>
            <p>&#x1F5EF; Interactive Experiences &#x1F5BC;</p>
            <p>&#x1F5EF; Indie-pop &#127925;</p>
            <p>&#x1F5EF; MEOWWW &#128049;</p>
            <p>&#x1F5EF; Cloud-watching &#65039; (yes, it's a real hobby);</p>
          </div>
          <div class="emoji-container-2">
            <h2>...and awards I've won!</h2>
            <p>
              🏆
              <a
                href="https://www.dandad.org/en/d-ad-ones-to-watch-emerging-creative-talent-new-blood-advice/"
                target="_blank"
              >
                <u>D&AD New Blood Portfolio Winner</u>
              </a>
            </p>
            <p>
              🏆 Wix Blog –
              <a
                href="https://www.wix.com/blog/2016/03/wix-websites-examples/"
                target="_blank"
              >
                <u>15 Outstanding Wix Website Examples</u>
              </a>
            </p>
            <p>
              🏆 Forbes –
              <a
                href="https://www.forbes.com/advisor/business/best-designed-websites/"
                target="_blank"
              >
                <u>Best Designed Websites of 2023</u>
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
