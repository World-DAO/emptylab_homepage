import styles from '@/styles/Home.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="/">未来科技</a>
        </div>
        <div className={styles.navLinks}>
          <a href="#products">产品</a>
          <a href="#about">关于我们</a>
          <a href="#faq">常见问题</a>
          <a href="#contact" className={styles.contactBtn}>联系我们</a>
        </div>
      </div>
    </nav>
  )
} 