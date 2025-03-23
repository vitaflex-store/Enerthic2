import { useRouter } from 'next/router';

const products = [
  { id: 1, name: { de: 'Eiweißpulver', es: 'Proteína', en: 'Protein' }, price: '29.99€' },
  { id: 2, name: { de: 'Yogamatte', es: 'Colchoneta de yoga', en: 'Yoga mat' }, price: '19.99€' },
  { id: 3, name: { de: 'Energie-Riegel', es: 'Barrita energética', en: 'Energy bar' }, price: '2.49€' },
];

export default function Catalog() {
  const { locale } = useRouter();

  const addToCartLabel = {
    de: 'In den Warenkorb',
    es: 'Agregar al carrito',
    en: 'Add to cart'
  };

  return (
    <main style={{ padding: '40px 20px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Katalog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3>{product.name[locale]}</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{product.price}</p>
            <button style={{ backgroundColor: '#00c853', border: 'none', padding: '10px 20px', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>
              {addToCartLabel[locale]}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
