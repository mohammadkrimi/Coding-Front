function App() {
  return (
    <>
      <Header />
      <Hero />
      <Countries />
      <GetReady />
      <Info />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="container" role="navigation" aria-label="Primary">
        <ul className="list">
          <li className="list-item"><a href="#hero" className="nav-link">Home</a></li>
          <li className="list-item"><a href="#countries" className="nav-link">Countries</a></li>
          <li className="list-item"><a href="#info" className="nav-link">Duration</a></li>
          <li className="list-item"><a href="#phrases" className="nav-link">Examples</a></li>
        </ul>
        <div className="list-btn">
          <a href="#getstarted" title="Get started" className="btn">Get started</a>
        </div>
      </div>
    </header>
  );
}

 function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="banner">
          <div className="content">
            <h1>Learn Spanish Online from Native Teachers</h1>
            <p className="banner-text">
              Grow your confidence in Spanish conversation, grammar and reading with live, online classes, professional teachers and a schedule that suits you.
            </p>
            <a href="#getstarted" title="Get started" className="btn">Get started</a>
          </div>
          <div className="man" aria-hidden="true">
            <img src="/assets/img/person.svg" alt="Teacher illustration" className="man-img" width="384" height="464" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Countries() {
  return (
    <section id="countries">
      <div className="container">
        <h2>Truly Experience Foreign Countries</h2>
        <p className="buz">Travel around the world and meet millions of Spanish-speaking people</p>
        <ul className="countries-cards">
          <CountryCard
            img="/assets/img/mexico.png"
            alt="Mexico"
            name="Mexico"
            note="+130 million speakers"
          />
          <CountryCard
            img="/assets/img/colombia.png"
            alt="Colombia"
            name="Colombia"
            note="+50 million speakers"
          />
          <CountryCard
            img="/assets/img/spain.png"
            alt="Spain"
            name="Spain"
            note="+47 million speakers"
          />
          <CountryCard
            img="/assets/img/argentina.png"
            alt="Argentina"
            name="Argentina"
            note="+45 million speakers"
          />
        </ul>
      </div>
    </section>
  );
}

function CountryCard({ img, alt, name, note }) {
  return (
    <li className="card">
      <img src={img} alt={alt} width="216" height="176" />
      <h3>{name}</h3>
      <p className="buz">{note}</p>
    </li>
  );
}

function GetReady() {
  return (
    <section id="get-ready">
      <div className="container">
        <div className="title">
          <div>
            <h4 id="getstarted">Ready to start learning Spanish?<br/>Let's try some!</h4>
          </div>
          <div>
            <a href="#getstarted" title="Get started" className="btn">Get started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section id="info">
      <div className="container">
        <div className="mid">
          <div className="how-long">
            <h5>How long does it take to learn Spanish?</h5>
            <p className="buz">
              People often want to know how to learn Spanish fast or are looking for the easiest way to learn Spanish. The US Foreign Service Institute suggests it takes 600–750 hours for an English-speaker to learn Spanish fluently. Remember, how long it takes to learn Spanish really depends on you. Your time commitment, learning plan, materials, and other resources are all important. Students without a learning plan can be confused about what to study and lack awareness of whether they’re improving. A lack of a study plan is often why students reach a basic level of Spanish and then plateau or stop studying altogether. Your materials and resources will also be a big factor. With an effective curriculum of lessons and a native-speaking teacher, your Spanish learning will not only be quicker but more comprehensive. Some people also have the resource of an immersive environment: If you live in a Spanish-speaking country you’re likely to learn faster. Finally, your time commitment will determine how quickly you learn. A student that can learn 8 hours per week will learn much faster than a student who studies just 1 hour per week.
            </p>
          </div>
          <div id="phrases">
            <h5>Common Spanish phrases</h5>
            <p className="buz">There are some common Spanish phrases that can help you go from zero to 60 in your speaking ability.</p>
            <ul>
              <li className="buz">How are you? <em>¿Qué tal?</em></li>
              <li className="buz">This can also be used for “how is [something]?” For example, “how was your weekend?” <em>¿Qué tal tu fin de semana?</em></li>
              <li className="buz">Nice to meet you. <em>Mucho gusto.</em></li>
              <li className="buz">Where are you from? <em>¿De dónde eres?</em></li>
              <li className="buz">I’m from… <em>Soy de…</em></li>
              <li className="buz">Have a good one! <em>Que le vaya bien.</em></li>
              <li className="buz">You can say this whenever you leave a shop or a restaurant.</li>
              <li className="buz">Excuse me. <em>Disculpe.</em></li>
              <li className="buz">This is for calling the attention of someone like a waiter.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="copyright">© 2025 Lingo — All Rights Reserved</p>
      </div>
    </footer>
  );
}

