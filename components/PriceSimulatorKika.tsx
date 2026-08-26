import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Info } from 'lucide-react';

/**
 * 帰化書類パックの総額シミュレーター（JA・自己完結）
 *
 * 価格モデル（税込・e-Apostille・PSA紙原本・DHL配送込み）:
 *  - 書類1通のみ  : 50,000円
 *  - 書類2通セット: 80,000円
 *  - 書類3〜5通   : 132,500円
 *  - 6通目以降    : ＋26,500円/通（税込）
 *  例）家族6通 = 132,500 + 26,500 = 159,000円
 *
 * 「132,500円 × 通数」という誤読（Arai様の失注寸前事例）を、通数を選ぶと
 * 総額が即出る形で解消する。爆発半径＝このコンポーネントを import する
 * ページのみ（共通コンポーネント・構造ファイルには非該当）。
 */

const SINGLE_FROM = 50000; // 単品（税込・DHL込み）
const TWO_DOCUMENTS = 80000; // 2通セット（税込・DHL込み）
const PACK_UP_TO_5 = 132500; // 3〜5通定額（税込・DHL込み）
const ADD_PER_COPY = 26500; // 6通目以降 追加1通（税込・込み）
const PACK_INCLUDED = 5;

const yen = (n: number) => '¥' + n.toLocaleString('ja-JP');

function calcPack(count: number): number {
  if (count === 1) return SINGLE_FROM;
  if (count === 2) return TWO_DOCUMENTS;
  if (count <= PACK_INCLUDED) return PACK_UP_TO_5;
  return PACK_UP_TO_5 + (count - PACK_INCLUDED) * ADD_PER_COPY;
}

export default function PriceSimulatorKika() {
  // 家族6通が代表例なので初期値は6（静的プリレンダでも意味のある総額が出る）
  const [count, setCount] = useState(6);
  const isSingle = count === 1;
  const packTotal = calcPack(count);
  const unit = Math.round(packTotal / count);

  return (
    <section className="mt-8 mb-8 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="bg-secondary text-white px-5 py-4 flex items-center gap-2">
        <Calculator className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <h2 className="text-base font-bold">帰化書類パック 総額シミュレーター</h2>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-600 mb-3">
          必要な書類の<strong>通数を選ぶ</strong>と、アポスティーユ・DHL国際配送まで含んだ
          <strong>総額の目安</strong>がすぐ出ます。
        </p>

        {/* 通数セレクタ */}
        <div className="mb-5">
          <label className="block text-xs font-bold tracking-wide text-gray-500 uppercase mb-2">
            必要な書類の通数
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2" role="group" aria-label="書類の通数">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={count === n}
                onClick={() => setCount(n)}
                className={`rounded-lg border py-2.5 text-sm font-bold transition-colors ${
                  count === n
                    ? 'bg-primary text-white border-primary'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-primary/50'
                }`}
              >
                {n}
                {n === 8 ? '+' : ''}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1.5">
            ※ 本人・父母・兄弟姉妹の出生証明書、父母の婚姻証明書などをまとめた合計通数です。
          </p>
        </div>

        {/* 総額表示 */}
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
          {isSingle ? (
            <>
              <p className="text-sm text-gray-600 mb-1">書類1通のみ（単品）の目安</p>
              <p className="text-3xl font-extrabold text-primary">
                {yen(SINGLE_FROM)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                e-Certificate・e-Apostille・SECPA紙原本・DHL国際送料込み（税込）。
              </p>
              <p className="text-xs text-gray-600 mt-2 bg-white rounded-lg px-3 py-2 border border-gray-100">
                2通セットは<strong>{yen(TWO_DOCUMENTS)}</strong>です（1通あたり{yen(TWO_DOCUMENTS / 2)}）。
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-1">
                書類{count}
                {count === 8 ? '通以上' : '通'}の目安（アポスティーユ・DHL配送込み・税込）
              </p>
              <p className="text-3xl font-extrabold text-primary">
                {yen(packTotal)}
                {count === 8 && <span className="text-base font-bold text-gray-500">〜</span>}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                内訳：{count === 2 ? <>2通セット {yen(TWO_DOCUMENTS)}</> : <>3〜5通パック {yen(PACK_UP_TO_5)}
                {count > PACK_INCLUDED && <> ＋ 追加{count - PACK_INCLUDED}通 × {yen(ADD_PER_COPY)}</>}</>}
                　（1通あたり実質 約{yen(unit)}）
              </p>
            </>
          )}
        </div>

        {/* 誤読対策の要 */}
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5">
          <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-gray-700 leading-relaxed">
            <strong>「132,500円 × 通数」ではありません。</strong>
            1通は50,000円、2通は80,000円、3〜5通は132,500円の定額です（いずれも税込・e-Apostille・PSA紙原本・DHL込み）。
            全書類を1つの荷物に集約するため、通数が増えても<strong>国際送料は1回分のみ</strong>です。
            5通の場合の1通あたり単価は26,500円で、単品依頼より割安になります。
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          ※ お支払いは着手金50%・完成書類のスキャンコピー確認後に残金50%。NBIクリアランス・翻訳・お急ぎ対応など内容により変わる場合は、
          <Link to="#contact" className="underline hover:text-primary">無料相談</Link>
          で正確なお見積りをご提示します。金額はいずれも目安です。
        </p>
      </div>
    </section>
  );
}
