import styles from '@/styles/Home.module.css'

interface ProductCardProps {
  title: string
  desc: string
  link: string
}

export default function ProductCard({ title, desc, link }: ProductCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer" 
      className={styles.productCard}
    >
      <article>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{desc}</p>
        <div className={styles.cardArrow}>
          <span>了解更多</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </article>
    </a>
  )
} 