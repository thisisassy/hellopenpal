import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/page.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Seo pagetitle="About"
        pagedesc="海外文通のはじめかた、英語で手紙の書き方を紹介するサイトです" />
      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeading}>About</h2>
        <article>
          <p>Penpal with meはこれから文通を始めたい人、海外文通やポストカード交換に興味があるみなさんに、海外文通のはじめかたについて紹介するサイトです。<br />
            文通相手の探し方や英語での手紙の書き方から海外文通をさらに楽しくするTipsや文通生活について書いていきます。</p>
          <h3 className={styles.sectionHeading}>このサイトを運営している人について</h3>
          <p>2021年4月からPostcrossingをはじめ、すっかりポストカード交換や海外文通にハマった人です。文通のやり方や記録をブログに書いているうちに、もう少し海外文通についてまとまった情報がほしい！と考え、文通をはじめた時に知っておきたかったことをまとめるサイトをつくりました。</p>
          <p>自由に旅行や移動ができなくなった期間を経て、SNSへ常に接続している状態からつかれた人々にもアナログで遠くに住んでいる人たちとのやりとりの楽しさを伝えていきます。</p>
          <div>
            <h4>サイトに掲載している記事や商品についてのご質問・お問い合わせ</h4>
            <p>なにかご要望・ご意見がありましたら、下記のフォームからお問い合わせください。</p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default AboutPage