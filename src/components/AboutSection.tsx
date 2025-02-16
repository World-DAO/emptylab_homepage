import styles from '@/styles/Home.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.section} ${styles.darkBg}`}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className="text-4xl font-bold mb-8">关于我们</h2>
          <p className="text-xl text-gray-400 mb-6">
            EmptyLab 是一个立足于新加坡的创新科技组织，专注于 Web3 与人工智能前沿技术的探索与研发。
            我们汇聚了来自新加坡南洋理工大学（NTU）、北京邮电大学（BUPT）等知名高校的优秀人才。
          </p>
          <p className="text-xl text-gray-400 mb-8">
            通过跨学科合作与创新，我们致力于推动区块链技术与人工智能的融合发展，为全球用户提供前沿的技术解决方案。
          </p>
        </div>
      </div>

      <div className={styles.newsSection}>
        <h3 className="text-3xl font-bold mb-8 text-center">最新动态</h3>
        <div className={styles.newsGrid}>
          <div className={styles.newsCard}>
            <span className="text-blue-400">2024年3月</span>
            <h4 className="text-xl font-semibold my-2">荣获新加坡科技创新奖</h4>
            <p className="text-gray-400">
              EmptyLab 凭借在 AI 领域的创新成果获得 2024 年新加坡科技创新奖
            </p>
          </div>
          <div className={styles.newsCard}>
            <span className="text-blue-400">2024年2月</span>
            <h4 className="text-xl font-semibold my-2">成功完成种子轮融资</h4>
            <p className="text-gray-400">
              获得来自顶级投资机构的战略投资，加速产品研发与市场拓展
            </p>
          </div>
          <div className={styles.newsCard}>
            <span className="text-blue-400">2024年1月</span>
            <h4 className="text-xl font-semibold my-2">Web3 创新实验室成立</h4>
            <p className="text-gray-400">
              与 NTU 区块链研究中心达成战略合作，共同推进 Web3 技术发展
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 