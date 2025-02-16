import Image from 'next/image'
import styles from '@/styles/Home.module.css'

interface ProductCardProps {
  title: string
  desc: string
  img: string
}

export default function ProductCard({ title, desc, img }: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <Image
        src={img}
        alt={title}
        width={400}
        height={300}
        className={styles.productImage}
      />
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
} 