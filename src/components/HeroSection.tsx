import styles from '@/styles/Home.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 
                       bg-clip-text text-transparent">
          创新驱动未来
        </h1>
        <p className="text-2xl mb-12 text-gray-400">
          智能科技解决方案专家
        </p>
        <a href="#products" className={styles.ctaButton}>
          探索产品
        </a>
        <div className={styles.heroGradient} />
      </div>
    </section>
  )
} 