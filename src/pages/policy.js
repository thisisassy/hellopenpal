import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/page.module.scss"

const PolicyPage = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="Privacy Policy"
        pagepath={location.pathname} />
      <section className={styles.pageSection}>
        <h2 className={styles.sectionHeading}>Privacy Policy</h2>
        <div>
          <h3>情報の利用目的</h3>
          <p>当サイトではお問い合わせいただく際に、お名前やメールアドレスなどの個人情報を入力いただいております。取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどを通じてご連絡する際にのみ利用させていただきます。これらの目的以外では利用いたしません。</p>
          <h3>アクセス解析ツール</h3>
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
          <h3>広告の配信</h3>
          <p>当サイトでは、閲覧者がそのウェブサイトや他のウェブサイトに過去にアクセスした際の情報に基づいて、閲覧者の興味に応じた商品やサービスの広告を配信するために、Googleなどの第三者配信事業者がCookieを使用しています。</p>
          <p>閲覧者はGoogleの広告設定ページでパーソナライズ広告を無効にできます。または、www.aboutads.infoにアクセスして、パーソナライズ広告に使われる第三者配信事業者のCookieを無効にできます。Cookieを無効にする方法やGoogleの広告に関する詳細はGoogleのポリシーと規約ページをご確認ください。
            また、当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
          <h3>免責事項</h3>
          <p>当サイトのコンテンツや情報について、できる限り正確な情報を提供するように努めていますが、正確性や安全性を保証するものではありません。情報が古くなっている場合もあります。当サイトに掲載された内容によって生じた損害等の一切の責任は負いかねますのでご了承ください。また、サイト内のリンクやバナーなどから移動した、他サイトで提供される情報やサービス等についての一切の責任も負いません。</p>

          <h3>著作権</h3>
          <p>当サイトで掲載している文章や画像の無断転載はご遠慮ください。当サイトの著作権や肖像権に関して問題がある場合は、お問い合わせフォームよりご連絡ください。迅速に対応いたします。</p>
        </div>
      </section>
    </Layout>
  )

}

export default PolicyPage