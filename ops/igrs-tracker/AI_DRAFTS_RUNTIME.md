# AI問い合わせドラフト運用

Web3Formsの新規問い合わせを15分ごとに確認するが、OpenAI APIを呼ぶのは未処理の新規問い合わせを見つけた時だけ。

通常の15分巡回はGmail検索とScript Propertiesの確認だけで、AIトークンは消費しない。

## 処理順

1. Web3Formsメールを検索
2. threadIdの処理済みマーカーを確認
3. すでに顧客へ返信済みなら終了。この時点ではAIを呼ばない
4. 未返信の新規問い合わせだけ処理ロックを保存
5. OpenAI Responses APIを1回呼ぶ
6. 質問への回答、目安料金、納期、注意点、次アクションを含む返信を生成
7. Gmail下書きを作成
8. 同じthreadIdでは以後AIを呼ばない

APIエラーやAPI key未設定時は、既存のテンプレート生成へ自動フォールバックする。

## コスト制御

AIモデルの既定値は `gpt-5.6-luna`。

1件の問い合わせにつきAI呼び出しは最大1回。15分間隔そのものではAPI料金は発生しない。

初回有効化では、過去14日分の既存Web3Formsスレッドを先に `baseline` として処理済みにする。これにより導入直後に過去案件へ一斉にAIを呼ぶこともない。

## プライバシー

AIに送るのは返信作成に必要な Name / Country / Service / Message / Purpose / Documents / Deadline / Landing page / Subject のみ。

顧客のメールアドレスとVisitor IPはAIへ送信しない。Responses APIは `store: false` で呼び出す。

## Apps Scriptの設定

既存プロジェクトに `Drafts.gs`、`AIDrafts.gs`、`AIEnable.gs` を追加する。

Apps Scriptの「プロジェクトの設定」→「スクリプト プロパティ」に次を追加する。

`OPENAI_API_KEY` = OpenAI Platformで発行したAPI key

任意:

`OPENAI_MODEL` = `gpt-5.6-luna`

API keyはChatGPTやGitHubへ貼らず、Apps ScriptのScript Propertiesへ直接登録する。

その後 `enableAiDraftAutomation()` を1回だけ手動実行する。

この関数は既存問い合わせをbaseline登録した後、旧 `draftJob` のトリガーを削除し、`aiDraftJob` だけを15分間隔で登録する。

以後に届いた新規問い合わせだけがAI処理対象になる。

## 料金ルール

AIに価格を自由生成させない。既存 `DRAFT_PRICING` の固定値をプロンプトへ渡し、そこに無い価格・納期・行政要件は発明しないよう指示する。

Tamara型の問い合わせでは、CENOMAR + Marriage Certificate + DHL = US$448、Marriage Certificate + AOM + DHL = US$498、納期3〜4週間という既存ルールをそのまま参照する。
