import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/page.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Seo pagetitle="Contact"
        pagedesc="海外文通のはじめかた、英語で手紙の書き方を紹介するサイトです" />
      <section className={styles.pageSection}>
        <article>
          <h4>サイトに掲載している記事や商品についてのご質問・お問い合わせ</h4>
          <p>なにかご要望・ご意見がありましたら、下記からお問い合わせください。</p>
          <p>haruka510a[a]gmail.com</p>
        </article>
      </section>
    </Layout>
  )
}

export default ContactPage