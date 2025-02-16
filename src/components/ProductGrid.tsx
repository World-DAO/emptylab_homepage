import ProductCard from './ProductCard'
import styles from '@/styles/Home.module.css'

const products = [
  { id: 1, title: '人工智能平台', desc: '企业级AI解决方案...', img: '/images/product-1.jpg' },
  // 其他产品数据
]

export default function ProductGrid() {
  return (
    <section id="products" className={styles.section}>
      <h2>核心产品</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
} 