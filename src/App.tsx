import { useState } from "react";
import {
  Typewriter,
  Button,
  Loading,
  Background,
  BackTop,
  Card,
  Title,
  Cursor,
} from "animal-island-ui";
import "animal-island-ui/style";
import "./App.css";
import "./components/portfolio.css";
import NightSky from "./components/NightSky";
import NavBar from "./components/NavBar";
import PhoneMenu from "./components/PhoneMenu";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SeasonalFooter from "./components/SeasonalFooter";
import { useNow } from "./timeOfDay";
import { profile } from "./data/portfolio";
import headshot from "./assets/headshot.png";
import { ArrowLeftCircleIcon } from "naive-icons";

function App() {
  const [entered, setEntered] = useState(false); // did user click enter button?
  const [loading, setLoading] = useState(true); // is loading screen showing
  const { now, period, season } = useNow(); // current time, time of day, season
  function handleEnter() {
    setEntered(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading time
  }
  function handleBack() {
    setEntered(false); // show the enter page again
    setLoading(true); // so the loader plays again next time you click Enter
  }
  return (
    <>
      {entered && <Loading active={loading} type="circle" tip="Loading…" />}
      {entered ? (
        <Cursor>
          <Background className="page" type="dots-dark-green" id="top">
            <NavBar />
            <main className="home">
              {/* Intro: photo next to Hello + name + bio */}
              <section className="intro">
                <img
                  className="intro-photo"
                  src={headshot}
                  alt={`headshot of ${profile.name}`}
                />
                <div className="intro-text">
                  <Title color="app-pink" size="large">
                    Hello!
                  </Title>
                  <h1 className="intro-name">
                    <Typewriter speed={70} autoPlay={!loading}>
                      I'm {profile.name}.
                    </Typewriter>
                  </h1>
                  <p className="intro-role">
                    {profile.role} · {profile.location}
                  </p>
                  <Card className="intro-bio">{profile.bio}</Card>
                </div>
              </section>

              {/* Phone menu: each app jumps to a section below */}
              <section className="phone-section">
                <PhoneMenu now={now} period={period} />
              </section>

              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <SeasonalFooter season={season} name={profile.name} />
            <BackTop />
            <button
              className="back-button"
              onClick={handleBack}
              aria-label="Back to welcome page"
            >
              <ArrowLeftCircleIcon size={46} color="#fff" />
            </button>
          </Background>
        </Cursor>
      ) : (
        <Cursor>
          <div className="enter-page">
            <NightSky />
            <div className="typewriter-enter">
              <Typewriter speed={70}>Welcome to my Portfolio</Typewriter>
            </div>
            <Button
              type="primary"
              size="large"
              className="enter-button"
              onClick={handleEnter}
            >
              Enter
            </Button>
          </div>
        </Cursor>
      )}
    </>
  );
}

export default App;
