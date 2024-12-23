export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ようこそ！</h1>

      <p className="mb-4">
        こちらはトップページです。このページでは、私たちのウェブサイトについての情報や、最新のニュースをお届けします。
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">最新情報</h2>
        <ul className="list-disc list-inside">
          <li>新しい製品が入荷しました！</li>
          <li>サービスの料金が改定されました。</li>
          <li>次回のイベントは来月開催予定です。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">私たちについて</h2>
        <p>
          私たちは、お客様に最高のサービスを提供することを目指しています。詳細については、
          <a href="/about" className="text-blue-600 hover:underline">
            こちら
          </a>
          からご覧ください。
        </p>
      </section>
    </div>
  );
}
