# Spam Blocker

Spam Blockerは特定の文字列に該当するツイートのツイート主をブロックします.

# 使用方法

### APIキーの取得

https://apps.twitter.com/

### クローン

```bash
$ git clone https://github.com/tyokinuhata/spam-blocker.git
```

### .envの作成と設定

```bash
$ cd spam-blocker
$ cp .env.example .env
```

```dotenv
CONSUMER_KEY=XXXXXXXXXX
CONSUMER_SECRET=XXXXXXXXXX
ACCESS_TOKEN_KEY=XXXXXXXXXX
ACCESS_TOKEN_SECRET=XXXXXXXXXX

Q=XXXXXXXXXX
LANG=ja
LOCALE=ja
RESULT_TYPE=mixed
COUNT=100
```

|環境変数|説明|
|:--|:--|
|CONSUMER_KEY|https://apps.twitter.com/で取得したConsumer Keyを指定する|
|CONSUMER_SECRET|https://apps.twitter.com/で取得したConsumer Secretを指定する|
|ACCESS_TOKEN_KEY|https://apps.twitter.com/で取得したAccess Tokenを指定する|
|ACCESS_TOKEN_SECRET|https://apps.twitter.com/で取得したAccess Token Secretを指定する|
|Q|ブロック対象とするツイートに含まれる文字列を指定する|
|LANG|ブロック対象となるツイートの言語を指定する|
|LOCALE|送信するクエリの言語を指定する|
|RESULT_TYPE|ブロック対象のツイートの種類を指定する.<br>popular: 人気のツイート<br>recent: 最新のツイート<br>mixed: 全てのツイート|
|COUNT|ブロック人数を指定する. 1 - 100の間で指定する|

詳細については, https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets を参照.

### 実行

```bash
$ node index.js
```