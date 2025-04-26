"use client"

import { useRouter } from "next/navigation"
import { FiArrowLeft } from "react-icons/fi"

export default function PrivacyPolicyPage() {
  const router = useRouter()

  return (
    <div className="scrollable-page bg-white">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="py-3 flex items-center">
          <button 
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="戻る"
          >
            <FiArrowLeft size={24} />
          </button>
          <h1 className="ml-3 text-xl font-medium">プライバシーポリシー</h1>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-3xl mx-auto p-6">
        <div className="prose prose-gray max-w-none">
          {/* <h2>16チャット<br />プライバシーポリシー</h2> */}
          <p>最終更新日: 2025年4月25日</p>

          <h3>1. はじめに</h3>
          <p>16チャット（以下「当アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーでは、当アプリの利用に関して収集する情報とその使用方法について説明します。</p>

          <h3>2. 収集する情報</h3>
          <p>当アプリでは、以下の情報を収集することがあります：</p>
          <ul>
            <li>チャット履歴：ユーザーと性格タイプAIとのチャットメッセージ</li>
            <li>デバイス情報：端末の種類、OSバージョン、アプリバージョン</li>
            <li>利用状況：アプリの使用頻度、利用機能、エラー情報</li>
          </ul>

          <h3>3. 情報の利用目的</h3>
          <p>収集した情報は、以下の目的で利用します：</p>
          <ul>
            <li>アプリの機能提供とパーソナライズされたチャット体験の提供</li>
            <li>アプリの改善およびバグ修正</li>
            <li>新機能の開発と既存機能の最適化</li>
            <li>利用状況の分析と統計情報の作成</li>
          </ul>

          <h3>4. 情報の共有</h3>
          <p>当アプリは、以下の場合を除き、ユーザーの個人情報を第三者と共有しません：</p>
          <ul>
            <li>ユーザーの同意がある場合</li>
            <li>法的要請に応じる必要がある場合</li>
            <li>サービス提供のために必要なパートナー企業（データ分析、サーバー運営など）と共有する場合</li>
          </ul>

          <h3>5. データの保管</h3>
          <p>ユーザーのチャット履歴はデバイス内およびサーバーに保存され、サービス提供のために必要な期間保持されます。ユーザーは設定からチャット履歴を削除することができます。</p>

          <h3>6. ユーザーの権利</h3>
          <p>ユーザーは以下の権利を有しています：</p>
          <ul>
            <li>保存されている自分の情報へのアクセス</li>
            <li>チャット履歴の削除</li>
            <li>当アプリの利用停止</li>
          </ul>

          <h3>7. プライバシーポリシーの変更</h3>
          <p>当アプリは、必要に応じて本プライバシーポリシーを更新することがあります。重要な変更がある場合は、アプリ内通知または当ウェブサイトでお知らせします。</p>

          <h3>8. お問い合わせ</h3>
          <p>プライバシーポリシーに関するご質問やご意見は、以下の連絡先までお寄せください：<br />
          メール：saemaster0702@gmail.com</p>
        </div>
      </div>
    </div>
  )
} 