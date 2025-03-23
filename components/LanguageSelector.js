import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Enerthic</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <ul style={ulStyle}>
          <li><a href="/" style={linkStyle}>Startseite</a></li>
          <li><a href="/catalog" style={linkStyle}>Katalog</a></li>
          <li><a href="/contact" style={linkStyle}>Kontakt</a></li>
        </ul>
        <LanguageSelector />
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#00c853',
  color: '#fff',
  fontFamily: 'Inter, sans-serif'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '20px',
  margin: 0,
  padding: 0
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500'
};
