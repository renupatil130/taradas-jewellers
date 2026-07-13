export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <img src="/images/necklace.png" className="about-img" alt="About" style={{objectFit: 'cover'}} />
            <div className="about-content">
              <h2>Our Legacy of Trust</h2>
              <p>Founded in 1965, Taradas Jewellers has been Davangere's most trusted name in gold and diamond jewellery for over 60 years. Our commitment to purity, craftsmanship, and fair pricing has made us the preferred jeweller for generations of families.</p>
              <p>Every piece of jewellery at Taradas is BIS hallmarked with HUID verification, ensuring you get exactly the purity you pay for. We believe in complete transparency — from gold rate to making charges.</p>
              <div className="stats-row">
                <div className="stat-item"><div className="stat-num">60+</div><div className="stat-lbl">Years</div></div>
                <div className="stat-item"><div className="stat-num">50K+</div><div className="stat-lbl">Happy Families</div></div>
                <div className="stat-item"><div className="stat-num">1000+</div><div className="stat-lbl">Designs</div></div>
                <div className="stat-item"><div className="stat-num">100%</div><div className="stat-lbl">Hallmarked</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Store</h2>
            <div className="gold-line"></div>
          </div>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 16, marginBottom: 8 }}>📍 <strong>Taradas Jewellers</strong></p>
            <p style={{ color: 'var(--text-light)', marginBottom: 8 }}>Main Road, Davangere, Karnataka 577001</p>
            <p style={{ color: 'var(--text-light)', marginBottom: 8 }}>📞 +91 98450 XXXXX</p>
            <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>🕐 Open: 10:00 AM – 9:00 PM (All days)</p>
            <div style={{ background: 'var(--gray)', borderRadius: 'var(--radius)', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)' }}>
              📍 Map — Davangere, Karnataka
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
