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
```

### 実行

```bash
$ node index.js
```