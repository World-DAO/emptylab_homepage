import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>创新驱动未来</h1>
        <p>智能科技解决方案专家</p>
        <a href="#products" className={styles.ctaButton}>
          探索产品
        </a>
      </div>
      <Image
        src="/images/hero-bg.jpg"
        alt="科技背景"
        fill
        priority
        className={styles.heroImage}
      />
    </section>
  )
} 