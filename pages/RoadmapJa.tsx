import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';
import { FileCheck, ListOrdered, Map, CheckCircle } from 'lucide-react';

const ctaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('setContactService', { detail: '個別ロードマップ作成' }));
  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
};

export default function RoadmapJa() {
  useMeta(
    `フィリピン国際結婚の手続きロードマップ作成【${SEO_YEAR_MONTH_JA}】お二人の状況に合わせた書類・手順を整理`,
    'フィリピン人パートナーと日本で結婚・同居を目指す方向けの個別ロードマップ作成。必要書類・手続きの順番・提出先を、お二人の状況に合わせて整理してお渡しします。49,800円（税込54,780円）。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '個別ロードマップ作成' },
      ]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '個別ロードマップ作成',
        description: 'フィリピン人のパートナーと日本で結婚し、その先も日本で一緒に暮らしたい方へ。必要書類、手続きの順番、提出先、全体の流れを、お二人の状況に合わせて整理した専用ロードマップを作成します。',
        url: 'https://ph-document.com/ja/kokusai-kekkon-roadmap/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '54780',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '54780',
            priceCurrency: 'JPY',
            description: '個別ロードマップ作成（税込）',
          },
        },
      }]}
    >
      {/* 上部小見出し */}
      <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
        国際結婚と日本での同居に向けた個別整理サービス
      </p>

      <HeroBanner
        title="個別ロードマップ作成"
        badges={['お二人の状況に合わせて整理', '専用ロードマップを納品', '納品後7日間メール対応']}
        ctaText="個別ロードマップを申し込む"
        ctaHref="#contact"
        ctaService="個別ロードマップ作成"
        lastUpdated="2026年3月1日"
      />

      {/* リード文 */}
      <section className="mb-12 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          フィリピン人のパートナーと結婚し、日本で一緒に暮らしていきたい。<br />
          このサービスは、そのために必要な書類、手続きの順番、提出先、全体の流れを整理する、<strong className="text-secondary">個別ロードマップ作成サービス</strong>です。
        </p>
        <p>
          国際結婚では、何の書類が必要なのか、どこに提出するのか、どの順番で進めればよいのかが分かりにくく、調べても自分たちのケースに当てはめると迷いやすいことがあります。
        </p>
        <p>
          書類を集める前に全体像が見えていないと、遠回りになったり、あとから不足や順番のズレに気づいたりしやすくなります。
        </p>
        <p>
          そこでIGRSでは、お二人の状況を事前にヒアリングしたうえで、日本で結婚し、その先も一緒に暮らすための流れを、分かりやすく整理してお渡しします。
        </p>
        <p className="font-semibold text-secondary">
          ただ情報を並べるのではなく、<br />
          「今どこにいて、次に何をすればよいのか」が見える状態を作るためのサービスです。
        </p>
      </section>

      {/* 価格と上部CTA */}
      <section className="mb-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-white to-primary/5 px-6 py-8 text-center">
        <p className="text-sm text-gray-500 mb-1">個別ロードマップ作成</p>
        <p className="text-4xl font-bold text-secondary mb-1">
          49,800<span className="text-xl font-semibold ml-0.5">円</span>
        </p>
        <p className="text-xs text-gray-400 mb-6">税込 54,780円</p>
        <a
          href="#contact"
          onClick={ctaClick}
          className="inline-flex items-center gap-2 bg-primary text-secondary font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all duration-200"
        >
          個別ロードマップを申し込む
        </a>
        <p className="mt-3 text-xs text-gray-400">
          事前確認フォームにご回答いただいた後、あなたたち専用のロードマップを作成します。
        </p>
      </section>

      {/* この商品が生まれた背景 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">この商品が生まれた背景</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>実際のお問い合わせの中で多いのは、単なる書類取得の相談だけではありません。</p>
          <p>本当に多いのは、</p>
          <ul className="space-y-2 pl-4 border-l-2 border-primary/30">
            {[
              '「自分たちの場合、何から始めればいいのか分からない」',
              '「どこに何を出せばいいのか分からない」',
              '「必要書類をどう集めればいいのか分からない」',
              '「行政書士などの専門家に相談した方がよさそうだけれど、どの段階で必要なのか分からない」',
            ].map((item) => (
              <li key={item} className="text-gray-600">{item}</li>
            ))}
          </ul>
          <p>という、全体像の見えにくさに関する不安です。</p>
          <p>このサービスは、そうした不安を整理するために作りました。</p>
          <p className="font-semibold text-secondary">
            まず全体像を見えるようにし、そのうえで必要な手続きや書類取得に進みやすくする。<br />
            そのための入口商品です。
          </p>
        </div>
      </section>

      {/* こんな不安はありませんか */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">こんな不安はありませんか</h2>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-3 mb-4">
          {[
            '本当にこの順番で合っているのか分からない。',
            '日本で先に結婚した方がいいのか、フィリピンで先に結婚した方がいいのか判断できない。',
            '何の書類が必要なのか、調べても情報がバラバラで、自分たちのケースに当てはめると分からなくなる。',
            'どこに何を出せばいいのか見えない。',
            '必要な書類をどう集めればいいのか分からない。',
            '相手がフィリピン在住なので、本人や家族でできることと、外部に頼んだ方がいいことの区別がつかない。',
            '行政書士などの専門家に相談した方がいい気はするけれど、どの段階で必要になるのか分からない。',
            '日本で結婚したあと、どうすれば日本で一緒に住む流れにつながるのか見えていない。',
            'とりあえず動いて、あとから「順番が違った」と気づくのが怖い。',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-secondary/[0.04] border border-secondary/10 px-5 py-4">
          <p className="text-sm font-semibold text-secondary leading-relaxed">
            こうした不安があるなら、先に全体像を整理した方が早いです。<br />
            書類を集める前に地図を作る。それが、このサービスの役割です。
          </p>
        </div>
      </section>

      {/* このサービスで分かること */}
      <FeatureList
        heading="このサービスで分かること"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '必要書類',
            description: 'お二人の状況（在住国・婚姻状況・在留資格の有無など）をもとに、どの書類が必要かを整理します。',
          },
          {
            icon: <ListOrdered className="w-4 h-4" />,
            title: '手続きの順番',
            description: '何をどの順番で進めればいいか。「先に日本で婚姻届か、フィリピンで先か」も含めて整理します。',
          },
          {
            icon: <Map className="w-4 h-4" />,
            title: '提出先と全体の流れ',
            description: 'どの機関に何を提出するか。日本での生活が始まるまでの全体の流れと目安期間を整理します。',
          },
        ]}
      />
      <div className="mb-12 -mt-6 rounded-xl bg-secondary/[0.03] border border-secondary/10 px-5 py-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          さらに、どの段階で行政書士などの専門家への相談が必要になりやすいかの目安も分かるようにします。<br />
          点ではなく、流れで理解できる状態を作ります。<br />
          <strong className="text-secondary">「今はここ」「次はこれ」「この先にこう進む」</strong>　それが見えるようになります。
        </p>
      </div>

      {/* お申し込み後の流れ */}
      <StepList
        heading="お申し込み後の流れ"
        steps={[
          {
            title: 'Step 1｜事前確認フォームのご回答',
            description: 'まず、お二人の現在の状況を確認します。',
          },
          {
            title: 'Step 2｜内容確認と個別整理',
            description: 'ご回答内容をもとに、必要書類、手続きの順番、提出先、日本で一緒に暮らすまでの流れを整理します。必要に応じて追加で状況を確認します。',
          },
          {
            title: 'Step 3｜専用ロードマップの納品',
            description: '完成したロードマップは、手続きの地図・スケジュール表として納品します。',
          },
          {
            title: 'Step 4｜納品後7日以内のメール対応',
            description: '本件に関するご質問にメールで対応します。返信は原則2営業日以内です。',
          },
        ]}
      />

      {/* 納品するもの */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">納品するもの</h2>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>納品するのは、お二人のケースに合わせて整理した<strong className="text-secondary">手続きの地図・スケジュール表</strong>です。</p>
          <p>
            必要書類の一覧だけではありません。手続きの順番、提出先、全体の流れ、日本で一緒に暮らすまでの目安期間を、できるだけ迷いにくい形でまとめてお渡しします。
          </p>
          <p>調べた情報をそのまま並べる資料ではなく、実際に進めるための地図です。</p>
          <p className="font-semibold text-secondary">
            まず何をするか。次に何をするか。あとで必要になるものは何か。<br />
            その順番が見えるように整理します。
          </p>
        </div>
      </section>

      {/* このサービスが向いている方 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">このサービスが向いている方</h2>
        </div>
        <div className="space-y-2 mb-4">
          {[
            '相手がフィリピン在住で、日本で結婚したいと考えている方。',
            '結婚だけでなく、その先の日本での同居まで見据えて動きたい方。',
            'ネットで調べても、自分たちの場合に当てはめると分からなくなる方。',
            '遠回りや二度手間を減らしたい方。',
            'まずは全体像を整理してから、必要なところだけ進めたい方。',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-card px-5 py-4">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            逆に、すでに全体像が明確で、必要書類も順番も固まっており、書類取得だけを依頼したい方は、書類取得サービスの方が合う場合があります。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">料金</h2>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-primary/5 p-6 md:p-8">
          <p className="text-sm text-gray-500 mb-1">個別ロードマップ作成</p>
          <p className="text-4xl font-bold text-secondary mb-1">
            49,800<span className="text-xl font-semibold ml-0.5">円</span>
          </p>
          <p className="text-sm text-gray-400 mb-5">税込 54,780円</p>
          <div className="text-sm text-gray-600 leading-relaxed space-y-2 mb-6">
            <p>
              この料金には、お二人の状況確認、個別ロードマップの作成、納品後7日以内のメール対応を含みます。
              返信は原則2営業日以内です。
            </p>
            <p>
              なお、個別ロードマップ作成後に、当方の<strong className="text-secondary">書類取得パック</strong>をご依頼いただく場合は、
              ロードマップご利用者特典として<strong className="text-secondary">20,000円を値引き</strong>します。
            </p>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 px-5 py-4">
            <p className="text-xs font-bold text-primary mb-1 tracking-wide">ロードマップご利用者特典</p>
            <p className="text-sm text-secondary leading-relaxed">
              書類取得パックへ進まれる場合は、書類取得パック料金から<strong>20,000円</strong>を値引きします。
            </p>
          </div>
        </div>
      </section>

      {/* ロードマップご利用者特典 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">ロードマップご利用者特典</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            個別ロードマップ作成後、当方の書類取得パックへ進まれる場合は、書類取得パック料金から<strong className="text-secondary">20,000円を値引き</strong>します。
          </p>
          <p className="font-semibold text-secondary">
            最初からすべてを一気に進めるのではなく、<br />
            まず流れを整理し、必要になった段階で次に進める。<br />
            その方が無駄が少なく、判断もしやすくなります。
          </p>
        </div>
      </section>

      {/* なぜ、最初にロードマップが必要なのか */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">なぜ、最初にロードマップが必要なのか</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>国際結婚や、その後の日本での同居は、必要書類だけ知っていても、うまく進まないことがあります。</p>
          <p className="font-semibold text-secondary">本当に大事なのは、順番です。</p>
          <ul className="space-y-2 pl-4 border-l-2 border-primary/30">
            {[
              '何を先にして、何を後にするのか。',
              'どこで止まりやすいのか。',
              '今の状況なら、どこから着手するのが現実的なのか。',
            ].map((item) => (
              <li key={item} className="text-gray-600">{item}</li>
            ))}
          </ul>
          <p>
            そこが曖昧なまま進めると、時間も手間も余計にかかりやすくなります。
          </p>
          <p>
            だから最初に、お二人専用の流れを整理する意味があります。
          </p>
          <p className="font-semibold text-secondary">
            結婚して終わりではなく、その先で一緒に暮らす未来につなげるために。<br />
            まずは順番を間違えないことが大切です。
          </p>
        </div>
      </section>

      {/* まずは、お二人のための地図を作りませんか */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            まずは、お二人のための地図を作りませんか
          </h2>
        </div>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed mb-6">
          <p>
            何から始めればいいのか分からない。<br />
            調べても、これで合っているのか不安。<br />
            できれば遠回りせずに進めたい。
          </p>
          <p>そう感じているなら、先に全体像を整理した方が早いです。</p>
          <p>
            書類を集める前に。<br />
            あちこちに相談する前に。<br />
            まずは、お二人のためのロードマップを作りませんか。
          </p>
        </div>
        <div className="text-center mb-5">
          <p className="text-sm text-gray-500 mb-1">個別ロードマップ作成</p>
          <p className="text-3xl font-bold text-secondary mb-0.5">
            49,800<span className="text-lg font-semibold">円</span>
          </p>
          <p className="text-xs text-gray-400">税込 54,780円</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 mb-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            本サービスは、個別の法律相談や申請代行ではなく、お二人の状況に応じて手続きの全体像を整理する案内サービスです。内容をご確認のうえ、お申し込みください。
          </p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          お申し込み後、事前確認フォームをもとに状況を確認し、あなたたち専用のロードマップを作成します。できるだけ正確にご記入ください。
        </p>
      </section>

      {/* 注意事項 */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">注意事項</h2>
        </div>
        <div className="rounded-xl bg-secondary/[0.03] border border-secondary/10 px-5 py-5">
          <ul className="space-y-3 text-xs text-gray-500 leading-relaxed">
            {[
              '本サービスは、お二人の状況をもとに、一般的な手続きの流れ、必要書類、提出先、順番等を整理してご案内するものです。',
              '日本法その他の法令に関する個別具体的な法的判断、法律相談、申請書作成、提出代行、代理交渉その他、資格を要する法律事務は行っておりません。',
              '当方は、一般的な情報整理と実務上の流れの整理を行うものであり、日本側の婚姻手続、在留資格申請、その他法的判断が必要な事項については、必要に応じて行政書士、弁護士その他の専門資格者にご相談ください。',
              '制度や必要書類、運用は変更されることがあります。最終的な提出可否や正式な必要書類については、各官公署、提出先機関、または専門資格者にご確認ください。',
              'ご入金後に個別整理を開始するため、提供開始後の返金はお受けしておりません。',
              '本サービスは結果を保証するものではなく、各官公署その他関係機関の判断を代替するものではありません。',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="flex-shrink-0 text-gray-300 mt-0.5">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedLinks links={[
        { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行' },
        { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
        { path: '/ja/nihon-senko-ph-senko/', label: '日本先行婚 vs フィリピン先行婚の比較ガイド' },
        { path: '/ja/ryokin/', label: '料金一覧' },
      ]} />
    </PageLayout>
  );
}
