import { useState, useEffect} from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Journey", "Contact"];

const SKILLS = [
  { category: "Programming", items: ["Python", "SQL"], icon: "⟨/⟩" },
  { category: "Libraries", items: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn"], icon: "◈" },
  { category: "Tools", items: ["Excel", "Power BI", "Jupyter Notebook"], icon: "⬡" },
  { category: "Database", items: ["SQL Joins", "Subqueries", "Aggregations", "CTEs"], icon: "⛁" },
];

const PROJECTS = [
  {
    title: "Titanic Survival Prediction",
    description: "Built an ML pipeline to predict passenger survival on the Titanic. Performed EDA, feature engineering, and compared Random Forest, Logistic Regression, and XGBoost models.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    color: "#7C3AED", accent: "#A78BFA", github: "https://github.com/nikhilkumar7512/titanic-survival-prediction", emoji: "🚢",
  },
  {
    title: "Sales Data Analysis Dashboard",
    description: "Designed an interactive Excel & Power BI dashboard analyzing $2M+ in sales data. Revealed top-performing regions and seasonal trends, enabling data-driven decisions.",
    tech: ["Excel", "Power BI", "DAX", "SQL"],
    color: "#0891B2", accent: "#67E8F9", github: "https://github.com/nikhilkumar7512/sales-dashboard", emoji: "📊",
  },
  {
    title: "Customer Segmentation",
    description: "Applied K-Means clustering on 10,000+ customer records to identify 4 distinct segments. Visualized results using PCA for dimensionality reduction and Seaborn for rich plots.",
    tech: ["Python", "Scikit-learn", "Seaborn", "Pandas"],
    color: "#059669", accent: "#6EE7B7", github: "https://github.com/nikhilkumar7512/customer-segmentation", emoji: "🎯",
  },
];

const TIMELINE = [
  { year: "2022", title: "Started B.Tech", desc: "Began Computer Science engineering, discovered passion for data through statistics coursework.", side: "left" },
  { year: "2023", title: "Python & Data Fundamentals", desc: "Mastered Python basics, NumPy, Pandas. Completed first data cleaning projects on real-world datasets.", side: "right" },
  { year: "2023", title: "Machine Learning Deep Dive", desc: "Studied ML algorithms — regression, classification, clustering. Built first predictive models using Scikit-learn.", side: "left" },
  { year: "2024", title: "Visualization & Dashboards", desc: "Learned Power BI and advanced Excel. Built end-to-end dashboards for sales and customer analytics.", side: "right" },
  { year: "2025", title: "Real-World Projects", desc: "Applied all skills in portfolio projects, contributing to open source and Kaggle competitions.", side: "left" },
];

function useTheme() {
  const [dark, setDark] = useState(true);
  return { dark, toggle: () => setDark(d => !d) };
}

function useScrollSpy() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map(n => document.getElementById(n.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 120) { setActive(NAV_LINKS[i]); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Portfolio() {
  const { dark, toggle } = useTheme();
  const active = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // ========== APNI IMAGE YAHAN SET KARO ==========
  const profileImage = "/assets/profile.png"; // Apni image ka path yahan daalo
  
  // ========== APNI LINKS YAHAN SET KARO ==========
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/nikhil-kumar-7a6672305/",
    github: "https://github.com/nikhilkumar7512",
    instagram: "https://www.instagram.com/nikhil__prajapati___/"
  };
  
  // ========== APNA EMAIL YAHAN SET KARO ==========
  const myEmail = "nikhilnk7575@gmail.com";

  const copy = () => {
    navigator.clipboard?.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const bg = dark ? "#0A0A0F" : "#F7F6F2";
  const surface = dark ? "#13131A" : "#FFFFFF";
  const surface2 = dark ? "#1C1C27" : "#F0EFF8";
  const text = dark ? "#E8E6FF" : "#1A1830";
  const muted = dark ? "#7B78A8" : "#7066A0";
  const border = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const accent = "#8B5CF6";
  const accentBright = "#A78BFA";

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth;overflow-x:hidden}
    body{background:${bg};color:${text};font-family:'DM Sans',sans-serif;font-weight:400;line-height:1.65;transition:background 0.3s,color 0.3s;-webkit-font-smoothing:antialiased;overflow-x:hidden;width:100%;max-width:100vw}
    ::selection{background:${accent};color:#fff}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:${accent};border-radius:10px}
    h1,h2,h3{font-family:'Playfair Display',serif;font-weight:700;line-height:1.2;word-break:break-word}
    a{color:inherit;text-decoration:none}
    section{padding:60px 0;overflow-x:hidden}
    @media(min-width:768px){section{padding:100px 0}}
    .container{max-width:1120px;margin:0 auto;padding:0 16px;width:100%}
    @media(min-width:768px){.container{padding:0 28px}}

    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes glowPulse{0%,100%{box-shadow:0 0 0 0 ${accent}44}50%{box-shadow:0 0 0 12px transparent}}
    @keyframes floatImg{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}

    .fade-up{opacity:0;animation:fadeUp 0.7s forwards}
    .delay-1{animation-delay:0.1s}.delay-2{animation-delay:0.2s}.delay-3{animation-delay:0.3s}.delay-4{animation-delay:0.4s}.delay-5{animation-delay:0.6s}

    .nav-link{position:relative;font-size:14px;font-weight:500;color:${muted};cursor:pointer;padding:6px 0;transition:color 0.2s;letter-spacing:0.02em}
    .nav-link:hover,.nav-link.active{color:${text}}
    .nav-link.active::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:2px;background:${accent};border-radius:2px}

    .btn-primary{display:inline-flex;align-items:center;gap:8px;background:${accent};color:#fff;padding:10px 18px;border-radius:50px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all 0.2s;font-family:'DM Sans',sans-serif;white-space:nowrap}
    @media(min-width:480px){.btn-primary{padding:13px 28px;font-size:15px}}
    .btn-primary:hover{background:#7C3AED;transform:translateY(-2px);box-shadow:0 8px 25px ${accent}55}
    
    .btn-secondary{display:inline-flex;align-items:center;gap:8px;background:transparent;color:${text};padding:10px 18px;border-radius:50px;font-size:13px;font-weight:500;cursor:pointer;border:1.5px solid ${border};transition:all 0.2s;font-family:'DM Sans',sans-serif;white-space:nowrap}
    @media(min-width:480px){.btn-secondary{padding:12px 28px;font-size:15px}}
    .btn-secondary:hover{border-color:${accent};color:${accentBright};transform:translateY(-2px)}

    .skill-card{background:${surface};border:1px solid ${border};border-radius:20px;padding:20px 16px;transition:all 0.25s;position:relative;overflow:hidden;width:100%}
    @media(min-width:768px){.skill-card{padding:28px 24px}}
    .skill-card:hover{border-color:${accent}66;transform:translateY(-4px);box-shadow:0 20px 50px rgba(139,92,246,0.12)}
    .skill-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${accent},${accentBright});opacity:0;transition:opacity 0.25s}
    .skill-card:hover::before{opacity:1}
    
    .skill-pill{display:inline-block;background:${surface2};color:${muted};font-size:11px;padding:3px 8px;border-radius:30px;margin:2px;border:1px solid ${border};font-weight:400;transition:all 0.2s}
    @media(min-width:480px){.skill-pill{font-size:13px;padding:5px 13px;margin:4px}}
    .skill-card:hover .skill-pill{border-color:${accent}44;color:${text}}

    .project-card{background:${surface};border:1px solid ${border};border-radius:24px;padding:20px 16px;transition:all 0.3s;position:relative;overflow:hidden;cursor:pointer;width:100%}
    @media(min-width:768px){.project-card{padding:32px 28px}}
    .project-card:hover{transform:translateY(-6px);box-shadow:0 30px 60px rgba(0,0,0,0.2)}
    .project-card .card-glow{position:absolute;top:-60px;right:-60px;width:180px;height:180px;border-radius:50%;opacity:0.06;transition:opacity 0.3s;filter:blur(40px)}
    .project-card:hover .card-glow{opacity:0.15}
    
    .tech-tag{display:inline-block;font-size:10px;padding:2px 6px;border-radius:20px;margin:2px;font-weight:500;font-family:'DM Sans',sans-serif}
    @media(min-width:480px){.tech-tag{font-size:12px;padding:4px 11px;margin:3px}}

    .timeline-dot{width:12px;height:12px;border-radius:50%;background:${accent};border:3px solid ${bg};position:absolute;z-index:2;animation:glowPulse 2.5s infinite}
    @media(min-width:768px){.timeline-dot{width:14px;height:14px;left:50%!important;transform:translateX(-50%)}}
    
    .timeline-line{position:absolute;top:0;bottom:0;width:2px;background:${border}}
    @media(min-width:768px){.timeline-line{left:50%!important;transform:translateX(-50%)}}

    .contact-card{background:${surface};border:1px solid ${border};border-radius:24px;padding:24px 16px;transition:all 0.25s;text-align:center;width:100%}
    @media(min-width:768px){.contact-card{padding:32px}}
    .contact-card:hover{border-color:${accent}66;transform:translateY(-4px);box-shadow:0 20px 50px rgba(139,92,246,0.1)}
    
    .social-link{display:inline-flex;align-items:center;gap:8px;background:${surface2};border:1px solid ${border};padding:8px 14px;border-radius:50px;font-size:12px;font-weight:500;transition:all 0.2s;cursor:pointer;color:${text};white-space:nowrap}
    @media(min-width:480px){.social-link{padding:11px 22px;font-size:14px;gap:10px}}
    .social-link:hover{border-color:${accent};color:${accentBright};transform:translateY(-2px)}

    .section-label{font-size:11px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:${accent};margin-bottom:12px;font-family:'DM Sans',sans-serif}
    @media(min-width:480px){.section-label{font-size:12px}}
    
    .section-title{font-size:clamp(28px,6vw,48px);color:${text};margin-bottom:16px}
    
    .section-sub{font-size:14px;color:${muted};max-width:500px;line-height:1.7}
    @media(min-width:480px){.section-sub{font-size:16px}}

    .hero-badge{display:inline-flex;align-items:center;gap:6px;background:${surface};border:1px solid ${border};padding:6px 12px;border-radius:50px;font-size:11px;color:${muted};margin-bottom:20px;max-width:100%}
    @media(min-width:480px){.hero-badge{padding:8px 18px;font-size:13px;gap:8px;margin-bottom:24px}}
    .hero-badge span{width:6px;height:6px;border-radius:50%;background:#22C55E;display:inline-block;animation:pulse 2s infinite;flex-shrink:0}
    @media(min-width:480px){.hero-badge span{width:8px;height:8px}}

    .grid-2{display:grid;grid-template-columns:1fr;gap:16px;width:100%}
    @media(min-width:700px){.grid-2{grid-template-columns:repeat(2,1fr);gap:20px}}
    
    .grid-3{display:grid;grid-template-columns:1fr;gap:20px;width:100%}
    @media(min-width:700px){.grid-3{grid-template-columns:repeat(2,1fr);gap:24px}}
    @media(min-width:1000px){.grid-3{grid-template-columns:repeat(3,1fr)}}

    .hero-grid{display:grid;grid-template-columns:1fr;gap:30px;align-items:center;width:100%;text-align:center}
    @media(min-width:768px){.hero-grid{grid-template-columns:1fr 1fr;gap:56px;text-align:left}}
    
    .hero-img-col{order:-1;display:flex;justify-content:center;width:100%}
    
    .hero-btn-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center!important;width:100%}
    @media(min-width:768px){.hero-btn-row{justify-content:flex-start!important}}
    @media(max-width:450px){.hero-btn-row{flex-direction:column}.hero-btn-row button{width:100%;justify-content:center}}
    
    .hero-stats{display:flex;gap:20px;margin-top:40px;padding-top:30px;border-top:1px solid ${border};flex-wrap:wrap;justify-content:center!important}
    @media(min-width:768px){.hero-stats{justify-content:flex-start!important;gap:32px;margin-top:60px;padding-top:40px}}

    .profile-img-wrap{position:relative;width:200px;height:200px;margin:0 auto;animation:floatImg 5s ease-in-out infinite;cursor:default}
    @media(min-width:480px){.profile-img-wrap{width:260px;height:260px}}
    @media(min-width:768px){.profile-img-wrap{width:300px;height:300px}}

    .profile-img-ring{position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg, ${accent}, ${accentBright}, #0EA5E9, #22C55E, ${accent});animation:spin 5s linear infinite;z-index:0}
    .profile-img-glow{position:absolute;inset:-22px;border-radius:50%;background:radial-gradient(circle, ${accent}40 0%, transparent 70%);z-index:0;animation:glowPulse 3s ease-in-out infinite}
    .profile-img-inner{position:relative;z-index:1;width:100%;height:100%;border-radius:50%;overflow:hidden;border:3px solid ${bg};box-shadow:0 20px 60px rgba(139,92,246,0.4),0 8px 24px rgba(0,0,0,0.5);transition:transform 0.4s ease}
    .profile-img-wrap:hover .profile-img-inner{transform:scale(1.04)}

    .timeline-block{display:flex;padding-bottom:30px;position:relative;width:100%}
    @media(max-width:767px){.timeline-block{flex-direction:column!important;padding-left:40px!important;padding-right:0!important}.timeline-line{left:16px!important}.timeline-dot{left:16px!important;top:18px!important}}

    .mobile-menu-btn{display:none;background:transparent;border:none;color:${text};font-size:24px;cursor:pointer}
    @media(max-width:767px){.mobile-menu-btn{display:block!important}}

    .mobile-nav{display:none;position:fixed;top:64px;left:0;right:0;background:${dark ? "rgba(10,10,15,0.98)" : "rgba(247,246,242,0.98)"};backdrop-filter:blur(18px);border-bottom:1px solid ${border};padding:20px;z-index:99;flex-direction:column;gap:4px}
    .mobile-nav.open{display:flex}
    .mobile-nav-link{font-size:16px;font-weight:500;color:${muted};cursor:pointer;padding:12px 0;border-bottom:1px solid ${border};transition:color 0.2s}
    .mobile-nav-link:last-child{border-bottom:none}
    .mobile-nav-link:hover{color:${text}}

    .about-grid{display:grid;grid-template-columns:1fr;gap:32px;align-items:center}
    @media(min-width:768px){.about-grid{grid-template-columns:1fr 1fr;gap:64px}}

    .noise{position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px}
    .orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;z-index:0;opacity:${dark ? 0.35 : 0.12}}

    .desktop-nav{display:flex;gap:36px;align-items:center}
    @media(max-width:767px){.desktop-nav{display:none!important}}

    footer .footer-links{display:flex;gap:20px}
    @media(max-width:600px){footer .footer-links{display:none!important}footer .footer-inner{flex-direction:column;text-align:center}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="noise" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: dark ? "rgba(10,10,15,0.85)" : "rgba(247,246,242,0.85)", backdropFilter: "blur(18px)", borderBottom: `1px solid ${border}`, transition: "background 0.3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: text, letterSpacing: "-0.02em" }}>
            NK<span style={{ color: accent }}>.</span>
          </div>

          <div className="desktop-nav">
            {NAV_LINKS.map(n => (
              <span key={n} className={`nav-link ${active === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button onClick={toggle} style={{ background: surface2, border: `1px solid ${border}`, borderRadius: 50, width: 36, height: 36, cursor: "pointer", fontSize: 14, transition: "all 0.2s", color: text, flexShrink: 0 }} title="Toggle theme">
              {dark ? "☀" : "◑"}
            </button>
            <button className="btn-primary" style={{ padding: "8px 14px", fontSize: 12 }} onClick={() => scrollTo("Contact")}>Hire Me</button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map(n => (
            <span key={n} className="mobile-nav-link" onClick={() => { scrollTo(n); setMenuOpen(false); }}>{n}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div className="orb" style={{ width: 600, height: 600, background: accent, top: -200, right: -200 }} />
        <div className="orb" style={{ width: 400, height: 400, background: "#0EA5E9", bottom: -150, left: -100 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid">
            <div className="hero-img-col">
              <div className="profile-img-wrap">
                <div className="profile-img-ring" />
                <div className="profile-img-glow" />
                <div className="profile-img-inner">
                  <img src={profileImage} alt="Nikhil Kumar Profile" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }} />
                </div>
              </div>
            </div>

            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              <div className="hero-badge fade-up"><span />B.Tech Student · Data Enthusiast</div>
              <h1 className="fade-up delay-1" style={{ fontSize: "clamp(36px,8vw,78px)", lineHeight: 1.1, marginBottom: 16 }}>
                Hi, I'm <em style={{ fontStyle: "italic", color: accentBright }}>Nikhil</em><br />
                <span style={{ color: muted, fontWeight: 400, fontStyle: "italic", fontSize: "0.85em" }}>Kumar.</span>
              </h1>
              <p className="fade-up delay-2" style={{ fontSize: "clamp(15px,3vw,24px)", color: muted, marginBottom: 10, fontWeight: 300 }}>
                Aspiring Data Analyst & Data Science Enthusiast
              </p>
              <p className="fade-up delay-3" style={{ fontSize: "clamp(13px,2vw,17px)", color: muted, marginBottom: 32, fontWeight: 300 }}>
                Turning data into insights and impactful decisions.
              </p>
              <div className="fade-up delay-4 hero-btn-row">
                <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects <span>→</span></button>
                <button className="btn-secondary" onClick={() => scrollTo("Contact")}>Contact Me</button>
              </div>
              <div className="fade-up delay-5 hero-stats">
                {[["3+", "Projects"], ["5+", "Tech"], ["∞", "Curious"]].map(([n, l]) => (
                  <div key={l}><div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", fontWeight: 700, color: text }}>{n}</div><div style={{ fontSize: 12, color: muted, marginTop: 2 }}>{l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: surface }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">About Me</div>
              <h2 className="section-title">Passionate about data, driven by curiosity.</h2>
              <p style={{ color: muted, lineHeight: 1.8, marginBottom: 16, fontSize: "clamp(13px,2vw,16px)" }}>
                I'm a B.Tech student with a deep passion for uncovering patterns in data. My journey began with basic Python scripting and grew into building complete data pipelines, dashboards, and machine learning models.
              </p>
              <p style={{ color: muted, lineHeight: 1.8, marginBottom: 24, fontSize: "clamp(13px,2vw,16px)" }}>
                I thrive at the intersection of analytical thinking and practical problem-solving — whether it's cleaning messy datasets, building predictive models, or designing dashboards that make insights immediately actionable.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Python", "SQL", "Excel", "Machine Learning", "Visualization"].map(t => (
                  <span key={t} className="skill-pill" style={{ background: `${accent}18`, border: `1px solid ${accent}44`, color: accentBright }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[{ icon: "◈", label: "Data Analysis", desc: "EDA, cleaning, viz" }, { icon: "⟨/⟩", label: "Python", desc: "Pandas, Matplotlib, Sklearn" }, { icon: "⛁", label: "SQL", desc: "Joins, CTEs, optimization" }, { icon: "⬡", label: "Dashboards", desc: "Excel, Power BI" }].map(({ icon, label, desc }) => (
                <div key={label} style={{ background: surface2, border: `1px solid ${border}`, borderRadius: 20, padding: 20, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${accent}66`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = ""; }}>
                  <div style={{ fontSize: 24, color: accent, marginBottom: 10, fontFamily: "monospace" }}>{icon}</div>
                  <div style={{ fontWeight: 500, fontSize: 14, color: text, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: muted }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Technical Skills</div>
            <h2 className="section-title">My Toolkit</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>A curated stack of tools and technologies I use to work with data.</p>
          </div>
          <div className="grid-2">
            {SKILLS.map(({ category, items, icon }) => (
              <div key={category} className="skill-card">
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, background: `${accent}18`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: accent }}>{icon}</div>
                  <div style={{ fontWeight: 500, fontSize: 16, color: text }}>{category}</div>
                </div>
                <div>{items.map(item => <span key={item} className="skill-pill">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: surface }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>Real-world data problems solved with clean code and clear thinking.</p>
          </div>
          <div className="grid-3">
            {PROJECTS.map(({ title, description, tech, color, accent: acc, github, emoji }) => (
              <div key={title} className="project-card">
                <div className="card-glow" style={{ background: color }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, position: "relative", zIndex: 1 }}>
                  <div style={{ width: 48, height: 48, background: `${color}22`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, border: `1px solid ${color}44` }}>{emoji}</div>
                  <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 4, background: surface2, border: `1px solid ${border}`, padding: "6px 12px", borderRadius: 50, fontSize: 11, fontWeight: 500, color: muted, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = acc; e.currentTarget.style.color = acc; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = muted; }}>⑂ GitHub</a>
                </div>
                <h3 style={{ fontSize: 18, fontFamily: "'Playfair Display',serif", fontWeight: 700, color: text, marginBottom: 8, position: "relative", zIndex: 1 }}>{title}</h3>
                <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, marginBottom: 16, position: "relative", zIndex: 1 }}>{description}</p>
                <div style={{ position: "relative", zIndex: 1 }}>{tech.map(t => <span key={t} className="tech-tag" style={{ background: `${color}18`, color: acc, border: `1px solid ${color}33` }}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Experience</div>
            <h2 className="section-title">Learning Journey</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>From zero to data — my path through analytics and ML.</p>
          </div>
          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
            <div className="timeline-line" />
            {TIMELINE.map(({ year, title, desc, side }, i) => (
              <div key={i} className="timeline-block" style={{ justifyContent: side === "left" ? "flex-end" : "flex-start", paddingLeft: side === "right" ? "56%" : 0, paddingRight: side === "left" ? "56%" : 0 }}>
                <div className="timeline-dot" />
                <div className="timeline-card" style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "16px 18px", maxWidth: 300, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${accent}55`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = ""; }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: accent, marginBottom: 4, letterSpacing: "0.08em" }}>{year}</div>
                  <div style={{ fontWeight: 500, fontSize: 14, color: text, marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: surface }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>Open to internships, projects, and collaborations in data.</p>
          </div>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div className="contact-card" style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>✉</div>
              <div style={{ fontWeight: 500, fontSize: 15, color: text, marginBottom: 4 }}>Email</div>
              <div style={{ fontSize: 13, color: muted, marginBottom: 16, wordBreak: "break-all" }}>{myEmail}</div>
              <button className="btn-primary" onClick={copy} style={{ fontSize: 14, padding: "10px 24px" }}>{copied ? "✓ Copied!" : "Copy Email"}</button>
            </div>
            <div className="contact-socials" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="social-link" onClick={() => window.open(socialLinks.linkedin, '_blank')}><span style={{ fontSize: 14, fontWeight: 700 }}>in</span> LinkedIn</button>
              <button className="social-link" onClick={() => window.open(socialLinks.github, '_blank')}><span style={{ fontSize: 14 }}>⑂</span> GitHub</button>
              <button className="social-link" onClick={() => window.open(socialLinks.instagram, '_blank')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 4 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: bg, borderTop: `1px solid ${border}`, padding: "24px 0" }}>
        <div className="container footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 18, color: text }}>NK<span style={{ color: accent }}>.</span></div>
          <div style={{ fontSize: 12, color: muted }}>© 2025 Nikhil Kumar — Aspiring Data Analyst</div>
          <div className="footer-links">
            {NAV_LINKS.map(n => (
              <span key={n} style={{ fontSize: 12, color: muted, cursor: "pointer", transition: "color 0.2s" }}
                onClick={() => scrollTo(n)} onMouseEnter={e => e.currentTarget.style.color = text} onMouseLeave={e => e.currentTarget.style.color = muted}>{n}</span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}