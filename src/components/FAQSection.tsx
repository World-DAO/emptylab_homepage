import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import styles from '@/styles/Home.module.css'

const faqs = [
  {
    question: "EmptyLab 提供哪些核心服务？",
    answer: "我们主要提供 AI 对话平台、Web3 解决方案和企业级定制服务。包括但不限于智能对话系统、区块链应用开发、AI 模型训练等。"
  },
  {
    question: "如何开始使用 MoonCL 平台？",
    answer: "访问 mooncl.ink 网站，注册账号后即可开始使用。我们提供免费试用版本，让您体验平台功能。如需更多定制化需求，可以联系我们的客服团队。"
  },
  {
    question: "支持私有化部署吗？",
    answer: "是的，我们提供完整的私有化部署方案。企业可以选择在自己的服务器或云平台上部署我们的解决方案，确保数据安全和隐私保护。"
  },
  {
    question: "如何与 EmptyLab 建立合作？",
    answer: "我们欢迎各类合作机会，包括技术合作、商务合作等。您可以通过官网的联系方式与我们取得联系，我们的团队会尽快回复。"
  },
  {
    question: "提供技术支持服务吗？",
    answer: "我们为所有客户提供专业的技术支持服务。企业版用户可以获得 7x24 小时的技术支持，确保系统稳定运行。"
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className={styles.section}>
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        常见问题
      </h2>
      <div className="max-w-3xl mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 