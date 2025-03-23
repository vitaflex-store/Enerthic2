import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();
  const translations = {
    de: {
      title: 'Willkommen bei Enerthic 💪',
      subtitle: 'Dein Shop für Fitnesszubehör und natürliche Produkte 🌿'
    },
    es: {
      title: 'Bienvenido a Enerthic 💪',
      subtitle: 'Tu tienda de accesorios fitness y productos naturales 🌿'
    },
    en: {
      title: 'Welcome to Enerthic 💪',
      subtitle: 'Your store for fitness gear and natural products 🌿'
    }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '60px 20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ color: '#00c853', fontSize: '2.5rem', marginBottom: '20px' }}>{t.title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>{t.subtitle}</p>
    </main>
  );
}
