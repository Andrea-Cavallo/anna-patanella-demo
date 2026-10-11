import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { Accordion } from "@base-ui/react/accordion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Leaf,
  Heart,
  Sprout,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import portrait from "../assets/anna-patanella-900.webp";
import smallPortrait from "../assets/anna-patanella-450.webp";
import "./styles.css";
import { AnnotatedText } from "./components/annotated-text";
const whatsapp =
  "https://wa.me/393925035002?text=Buongiorno%20dottoressa%20Patanella%2C%20vorrei%20informazioni%20per%20un%20primo%20colloquio.";
const nav = [
  ["percorsi", "Come posso aiutarti"],
  ["anna", "Chi sono"],
  ["primo-colloquio", "Il primo colloquio"],
];
const paths = [
  {
    icon: Leaf,
    title: "Ansia e stress",
    text: "Quando i pensieri si affollano e il corpo fatica a fermarsi. Uno spazio per ascoltare ciò che senti e ritrovare il tuo ritmo.",
    tags: "PREOCCUPAZIONI · TENSIONE · SOVRACCARICO",
  },
  {
    icon: Heart,
    title: "Relazioni ed emozioni",
    text: "Comprendere i tuoi bisogni, dare voce alle emozioni e trovare un modo più sereno di stare con te e con gli altri.",
    tags: "LEGAMI · AUTOSTIMA · CONFINI",
  },
  {
    icon: Sprout,
    title: "Cambiamenti e lutto",
    text: "Attraversare una perdita o una fase nuova può disorientare. Possiamo trovare insieme lo spazio per elaborarla.",
    tags: "PERDITE · TRANSIZIONI · NUOVI INIZI",
  },
];
const faqs = [
  [
    "Devo sapere già cosa dire?",
    "No. Puoi arrivare anche con una sensazione confusa o con la difficoltà di trovare le parole. Partiamo da ciò che senti, con i tuoi tempi.",
  ],
  [
    "Come funziona il primo colloquio?",
    "È un incontro per conoscerci: mi racconti cosa ti porta qui e valutiamo insieme se e come proseguire. Il primo colloquio non ti impegna a continuare.",
  ],
  [
    "Posso fare un percorso online?",
    "Sì, è possibile incontrarci online. Contattami per concordare le modalità e valutare insieme se questa soluzione risponde alle tue esigenze.",
  ],
  [
    "Quanto costa una seduta?",
    "Puoi contattarmi per conoscere la tariffa del primo colloquio e delle sedute successive, prima di fissare un appuntamento.",
  ],
  [
    "Dove si trova lo studio?",
    "Ricevo a Roma, su appuntamento. Scrivimi o chiamami per conoscere l’indirizzo e organizzare il nostro incontro.",
  ],
];
function Button({ href = "#contatti", children }) {
  return (
    <a className="button" href={href}>
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </a>
  );
}
function Label({ children, number }) {
  return (
    <p className="eyebrow">
      {number && <span>{number}</span>}
      {children}
    </p>
  );
}
function Reveal({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { y: [12, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const menuButton = useRef(null);
  const mobileNav = useRef(null);
  useEffect(() => {
    if (!menu) return;
    mobileNav.current?.querySelector("a")?.focus();
    const close = (e) => {
      if (e.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#contenuto">
        Vai al contenuto
      </a>
      <header className="header">
        <a className="brand" href="#inizio" aria-label="Anna Patanella, inizio">
          <span className="brand-symbol">
            a<span>p</span>
            <i />
          </span>
          <span>
            Anna Patanella<small>PSICOLOGA · PSICOTERAPEUTA</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {nav.map(([id, text]) => (
            <a key={id} href={"#" + id}>
              {text}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contatti">
          Parliamone <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          className="menu-button"
          aria-label={menu ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menu}
          aria-controls="mobile-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav
          ref={mobileNav}
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigazione mobile"
          hidden={!menu}
        >
          {[...nav, ["contatti", "Parliamone"]].map(([id, text]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {text}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      </header>
      <main id="contenuto">
        <section id="inizio" className="hero container">
          <div className="hero-copy">
            <Label>UNO SPAZIO DI ASCOLTO, A ROMA E ONLINE</Label>
            <h1>
              Puoi tornare
              <br />a sentirti{" "}
              <em>
                <AnnotatedText
                  variant="underline"
                  color="annotation-color"
                  className="annotation"
                  duration={0.45}
                >
                  te.
                </AnnotatedText>
              </em>
            </h1>
            <p className="hero-description">
              Non devi avere tutte le risposte.
              <br />A volte, il primo passo è concederti uno spazio in cui
              essere ascoltato.
            </p>
            <Button>Iniziamo da un colloquio</Button>
            <p className="hero-note">
              <span />
              Con i tuoi tempi. Senza giudizio.
            </p>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src={portrait}
                srcSet={`${smallPortrait} 450w, ${portrait} 900w`}
                sizes="(max-width:760px) 90vw, 43vw"
                width="900"
                height="1125"
                alt="Anna Patanella, psicologa e psicoterapeuta"
                fetchPriority="high"
              />
              <span className="photo-label">
                Dott.ssa Anna Patanella<small>Psicologa e psicoterapeuta</small>
              </span>
            </div>
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="hero-stamp" aria-hidden="true">
              <Sprout size={25} />
              <span>
                UN PASSO
                <br />
                ALLA VOLTA
              </span>
            </div>
            <span className="visual-caption">
              La cura comincia dall’ascolto.
            </span>
          </div>
        </section>
        <div className="trust-strip container">
          <span>Psicoterapia Funzionale</span>
          <span>
            <MapPin size={15} aria-hidden="true" />
            In studio a Roma
          </span>
          <span>
            <span className="tiny-circle" />
            Anche online
          </span>
          <span>Albo Psicologi Lazio · n. 22416</span>
        </div>
        <section id="percorsi" className="section container">
          <div className="section-heading">
            <div>
              <Label number="01">COME POSSO AIUTARTI</Label>
              <h2>
                Non tutto va affrontato
                <br />
                <em>da soli.</em>
              </h2>
            </div>
            <p>
              Ci sono momenti in cui fermarsi e chiedere aiuto è un modo per
              prendersi cura di sé. Da qui possiamo iniziare.
            </p>
          </div>
          <div className="path-grid">
            {paths.map(({ icon: Icon, title, text, tags }, i) => (
              <Reveal className="path-card" key={title}>
                <div className="card-top">
                  <Icon size={30} strokeWidth={1.2} aria-hidden="true" />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="card-bottom">
                  <small>{tags}</small>
                  <a
                    href="#contatti"
                    aria-label={"Parliamo di " + title.toLowerCase()}
                  >
                    <ArrowUpRight size={21} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="anna" className="about">
          <div className="container about-grid">
            <div>
              <Label number="02">PIACERE, SONO ANNA</Label>
              <h2>
                Una persona,
                <br />
                prima di una
                <br />
                <em>professionista.</em>
              </h2>
              <p className="about-signature">Anna Patanella</p>
            </div>
            <div className="about-copy">
              <p className="lead">
                Credo in uno spazio in cui non devi dimostrare niente. Dove puoi
                portare anche quello che è difficile da dire.
              </p>
              <p>
                Mi sono laureata in Psicologia alla LUMSA di Roma, dove ho poi
                frequentato un master in Psicomotricità, e mi sono specializzata
                in Psicoterapia Funzionale.
              </p>
              <p>
                Prima di accompagnare gli altri ho fatto un lungo percorso
                personale: è da lì che nasce il mio modo di stare accanto alle
                persone.
              </p>
              <div className="approach">
                <Sprout size={30} strokeWidth={1.2} aria-hidden="true" />
                <div>
                  <h3>La parola, le emozioni, il corpo.</h3>
                  <p>
                    La Psicoterapia Funzionale considera pensieri, emozioni,
                    respiro e postura come parti di un unico organismo. In
                    seduta lavoriamo sulla persona nella sua interezza.
                  </p>
                </div>
              </div>
              <a className="text-link" href="#primo-colloquio">
                Conosciamoci, un passo alla volta
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </section>
        <section id="primo-colloquio" className="section container">
          <div className="section-heading">
            <div>
              <Label number="03">IL PRIMO COLLOQUIO</Label>
              <h2>
                Un inizio semplice.
                <br />
                <em>Il tuo.</em>
              </h2>
            </div>
            <p>
              Non serve sentirsi pronti al cento per cento. Basta partire da una
              domanda, da un bisogno, da quello che c’è.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "Scrivimi",
                "Un messaggio o una telefonata. Puoi dirmi in poche parole cosa ti porta a cercare uno spazio di ascolto.",
              ],
              [
                "Troviamo un momento",
                "Concordiamo un appuntamento in studio a Roma oppure online, secondo le tue esigenze.",
              ],
              [
                "Ci conosciamo",
                "Ascoltiamo ciò che senti e valutiamo insieme come proseguire. Senza obbligo di continuare.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="faq-layout">
            <div>
              <Label>QUALCHE RISPOSTA, PER INIZIARE</Label>
              <h3 className="faq-title">
                Forse ti stai
                <br />
                <em>chiedendo…</em>
              </h3>
            </div>
            <Accordion.Root className="faq" defaultValue={["faq-0"]}>
              {faqs.map(([q, a], i) => (
                <Accordion.Item className="faq-item" value={"faq-" + i} key={q}>
                  <Accordion.Header>
                    <Accordion.Trigger className="faq-trigger">
                      {q}
                      <Plus size={19} aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="faq-panel">
                    <p>{a}</p>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </section>
        <section id="contatti" className="contact">
          <div className="container contact-grid">
            <div>
              <Label number="04">FACCIAMO IL PRIMO PASSO</Label>
              <h2>
                C’è spazio
                <br />
                <em>per quello che senti.</em>
              </h2>
              <p>
                Per una domanda o per fissare un primo colloquio,
                <br />
                puoi contattarmi nel modo che preferisci.
              </p>
              <Button href={whatsapp}>Scrivimi su WhatsApp</Button>
              <small className="contact-note">
                Per il primo contatto bastano poche parole.
                <br />
                Evita di inviare informazioni sanitarie sensibili.
              </small>
            </div>
            <div className="contact-links">
              <a href="tel:+393925035002">
                <Phone size={21} />
                <span>
                  <small>CHIAMAMI</small>+39 392 503 5002
                </span>
                <ArrowUpRight size={20} />
              </a>
              <a href="mailto:annapatanellapsicologa@gmail.com">
                <Mail size={21} />
                <span>
                  <small>SCRIVIMI</small>annapatanellapsicologa@gmail.com
                </span>
                <ArrowUpRight size={20} />
              </a>
              <div>
                <MapPin size={21} />
                <span>
                  <small>INCONTRIAMOCI</small>Roma, su appuntamento
                  <br />
                  <span className="muted">Oppure online, nel tuo spazio.</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <div className="footer-main">
          <a className="footer-brand" href="#inizio">
            Anna Patanella<small>Psicologa e psicoterapeuta</small>
          </a>
          <p>Ascoltarsi è già un inizio.</p>
          <a className="text-link" href="#inizio">
            Torna su
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Anna Patanella</span>
          <span>Albo Psicologi Lazio n. 22416 · P. IVA 16124471000</span>
          <a href="https://annapatanellapsicologa.it/privacy-policy/">
            Privacy
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
createRoot(document.getElementById("root")).render(<App />);
