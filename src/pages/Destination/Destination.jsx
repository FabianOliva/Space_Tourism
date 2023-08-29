import "./destination.css";
import moon from "./../../../public/destination/image-moon.png";
import mars from "./../../../public/destination/image-mars.png";
import europa from "./../../../public/destination/image-europa.png";
import titan from "./../../../public/destination/image-titan.png";
import Nav_Bar from "../../components/Nav_bar";
import { useState } from "react";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="container_margin">
        <Nav_Bar />
        <h2 className="destinationTitle">
          <span className="destinationTitleSpan">01</span>PICK YOUR DESTINATION
        </h2>
        {/* Section Imagen */}
        <div className="sectionContainer">
          <section>
            <img
              className={activeTab === 0 ? "planet active" : "planet disabled"}
              src={moon}
              alt="moon"
            />
            <img
              className={activeTab === 1 ? "planet active" : "planet disabled"}
              src={mars}
              alt="mars"
            />
            <img
              className={activeTab === 2 ? "planet active" : "planet disabled"}
              src={europa}
              alt="europa"
            />
            <img
              className={activeTab === 3 ? "planet active" : "planet disabled"}
              src={titan}
              alt="titan"
            />
          </section>
          {/* Section descripcion */}
          <section className="descriptionSection">
            <div>
              <button
                className="description_btn"
                onClick={() => setActiveTab(0)}
              >
                MOON
              </button>
              <button
                className="description_btn"
                onClick={() => setActiveTab(1)}
              >
                MARS
              </button>
              <button
                className="description_btn"
                onClick={() => setActiveTab(2)}
              >
                EUROPA
              </button>
              <button
                className="description_btn"
                onClick={() => setActiveTab(3)}
              >
                TITAN
              </button>
            </div>

            <div className={activeTab === 0 ? "active" : "disabled"}>
              <h2 className="contentTitle">MOON</h2>
              <p className="contentText">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="distContainer">
                <div>
                  <p className="distSmallText">AVG. DISTANCE</p>
                  <p className="distBigText">384,400 KM </p>
                </div>
                <div>
                  <p className="distSmallText">EST. TRAVEL TIME</p>
                  <p className="distBigText">3 DAYS</p>
                </div>
              </div>
            </div>

            <div className={activeTab === 1 ? "active" : "disabled"}>
              <h2 className="contentTitle">MARS</h2>
              <p className="contentText">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className="distContainer">
                <div>
                  <p className="distSmallText">AVG. DISTANCE</p>
                  <p className="distBigText">225 MIL. KM</p>
                </div>
                <div>
                  <p className="distSmallText">EST. TRAVEL TIME</p>
                  <p className="distBigText">9 MONTHS</p>
                </div>
              </div>
            </div>

            <div className={activeTab === 2 ? "active" : "disabled"}>
              <h2 className="contentTitle">EUROPA</h2>
              <p className="contentText">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className="distContainer">
                <div>
                  <p className="distSmallText">AVG. DISTANCE</p>
                  <p className="distBigText">628 MIL. KM</p>
                </div>
                <div>
                  <p className="distSmallText">EST. TRAVEL TIME</p>
                  <p className="distBigText">3 YEARS</p>
                </div>
              </div>
            </div>

            <div className={activeTab === 3 ? "active" : "disabled"}>
              <h2 className="contentTitle">TITAN</h2>
              <p className="contentText">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div className="distContainer">
                <div>
                  <p className="distSmallText">AVG. DISTANCE</p>
                  <p className="distBigText">1.6 BIL. KM</p>
                </div>
                <div>
                  <p className="distSmallText">EST. TRAVEL TIME</p>
                  <p className="distBigText">7 YEARS</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Destination;
