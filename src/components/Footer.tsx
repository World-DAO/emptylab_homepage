import styles from '@/styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>未来科技</h4>
          <p>© 2023 未来科技有限公司<br/>沪ICP备12345678号</p>
        </div>
        <div className={styles.footerSection}>
          <h4>联系我们</h4>
          <p>上海市浦东新区<br/>电话: 021-12345678<br/>邮箱: contact@futuretech.com</p>
        </div>
      </div>
    </footer>
  )
} 