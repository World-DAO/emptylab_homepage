import ProductCard from './ProductCard'
import styles from '@/styles/Home.module.css'

const products = [
  {
    id: 1,
    title: 'MoonCL',
    desc: '智能对话平台，支持多语言交互、知识库管理、自定义场景等功能',
    link: 'https://mooncl.ink'
  },
  {
    id: 2,
    title: 'MoonCL Pro',
    desc: '企业级解决方案，提供私有部署、数据安全、团队协作等高级功能',
    link: 'https://mooncl.ink/pro'
  },
  {
    id: 3,
    title: 'MoonCL API',
    desc: '开放API接口，支持系统集成、二次开发、自定义模型训练',
    link: 'https://mooncl.ink/api'
  }
]

export default function ProductGrid() {
  return (
    <section id="products" className={styles.section}>
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        核心产品
      </h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
} 