import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🐾</span>
            <span className="logo-text">Patas Sem Lar</span>
          </div>

          <ul className="menu">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Animais</a>
            </li>
            <li>
              <a href="#">Como funciona</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <a href="#" className="btn-login">
            Login?
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-content">
          <h1>
            Encontre seu novo
            <br />
            melhor amigo!
          </h1>
          <p>
            Milhares de cães, gatos e outros pets esperando por um lar amoroso.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Ver animais para adoção</button>
            <button className="btn-secondary">Saiba como adotar</button>
          </div>
        </div>
      </header>

      <div className="filters">
        <div className="container">
          <div className="filter-group">
            <button className="filter-btn active">Todos</button>
            <button className="filter-btn">Cachorros</button>
            <button className="filter-btn">Gatos</button>
            <button className="filter-btn">Outros</button>
          </div>

          <div className="location-search">
            <input
              type="text"
              value="Localização (São Paulo)"
              className="location-input"
            />
          </div>

          <button className="btn-search">Buscar</button>
        </div>
      </div>

      <section className="animals-section">
        <div className="container">
          <h2>ÚLTIMOS ANIMAIS REGISTRADOS</h2>

          <div className="animals-grid">
            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Thor • 3 anos</h3>
                <ul>
                  <li>• Cachorro • Ainnn</li>
                  <li>• Instituição de Lisboa •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>

            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Bella • 2 anos</h3>
                <ul>
                  <li>• Cachorra • Poodle</li>
                  <li>• Instituição do Porto •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>

            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Max • 5 anos</h3>
                <ul>
                  <li>• Cachorro • Viralata</li>
                  <li>• Instituição Ilha da Madeira •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>

            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Luna • 2 anos</h3>
                <ul>
                  <li>• Gata • SRD</li>
                  <li>• Instituição de Lisboa •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>

            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Simba • 1 ano</h3>
                <ul>
                  <li>• Gato • SRD</li>
                  <li>• Instituição do Porto •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>

            <div className="animal-card">
              <div className="image-placeholder">Imagem do animal</div>
              <div className="card-info">
                <h3>Mia • 4 anos</h3>
                <ul>
                  <li>• Gata • Siamesa</li>
                  <li>• Instituição Ilha da Madeira •</li>
                </ul>
                <button className="btn-adopt">Quero adotar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="container">
          <h2>COMO FUNCIONA</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Escolha o pet</h3>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Conheça o pet</h3>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Adote e seja feliz</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">Patas Sem Lar</span>
            </div>
            <div className="footer-links">
              <a href="#">Sobre nós</a>
              <a href="#">Animais</a>
              <a href="#">Contato</a>
              <a href="#">Termos</a>
            </div>
          </div>
          <div className="footer-bottom">
            © Patas Sem Lar 2026 - Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
