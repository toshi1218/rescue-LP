# Web3Forms 自動返信ドラフト

`Drafts.gs` は、Web3Forms から届く問い合わせを15分ごとに確認し、顧客宛ての Gmail 下書きを自動作成する。

## 動作

1. `in:anywhere from:web3forms.com newer_than:14d` で問い合わせを確認
2. Name / Email / Country / Service / Message などを解析
3. 問い合わせ内容から案件種別を判定
4. 料金の目安、納期、注意点、次アクションを含む返信文を作成
5. Gmail の下書きに保存
6. 既存の案件台帳が同じ Apps Script プロジェクトにある場合は「次アクション」を `ドラフト確認→送信` に更新
7. Telegram 通知関数が利用可能なら、ドラフト作成を通知

自動送信はしない。送信前に必ず人間が確認する。

## 重複防止

Web3Forms の threadId ごとに Script Properties に処理状態を保存する。

問い合わせ受信後に同じ顧客へすでにメールを送っている場合は、その案件を `already-replied` として処理済みにし、下書きを作成しない。

そのため、導入時に過去14日分を走査しても、すでに返信済みの Tamara のような案件に二重ドラフトは作られない。

## 現在の自動料金マスタ

料金は正式見積ではなく、問い合わせ一次返信用の目安。

| 案件 | 目安 |
|---|---:|
| USA向け CENOMAR | US$199 |
| USA向け PSA Marriage Certificate | US$199 |
| USA向け PSA Birth Certificate | US$199 |
| USA向け AOM | US$249 |
| USA向け DHL | 約US$50 |
| PSA書類 + e-Apostille | 33,000円 / 1書類 |
| NBI | 39,800円〜 |
| 国際結婚書類サポート | 99,800円〜 |
| 配偶者ビザ書類サポート | 129,800円〜 |

価格改定時は `Drafts.gs` の `DRAFT_PRICING` だけ変更する。

## Tamara 型の処理

問い合わせに `CENOMAR` と `Marriage Certificate` の両方が含まれる場合は、USAなら以下を自動記載する。

CENOMAR US$199

PSA Marriage Certificate US$199

DHL 約US$50

合計 US$448

納期 3〜4週間

同時に「既婚者の場合は CENOMAR ではなく AOM の可能性がある」と説明し、AOMの場合の合計 US$498 も提示する。

さらに米国移民・配偶者ビザ案件では、Birth Certificate が必要になる可能性も記載し、提出先やチェックリストの確認を依頼する。

## 本人確認書類

パスポートやIDを通常メールへの添付で要求しない。

一次返信では、必要書類が確定した後に安全な提出方法を案内すると記載する。既存の tracking portal は追跡番号＋PINでアップロードできるため、案件確定後にそこで受け取る。

## 有効化

既存の IGRS Apps Script プロジェクトに `Drafts.gs` を追加し、`installDraftTrigger()` を一度実行する。

以後、`draftJob()` が15分ごとに実行される。

動作確認だけしたい場合は `draftJob()` を手動実行する。

## 再生成

特定の Web3Forms threadId を再処理したい場合は、Apps Script から以下を実行する。

```javascript
resetInquiryDraftMarker('THREAD_ID');
draftJob();
```
