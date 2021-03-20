# ノート

[AWS CDK超入門] DynamoDB + Lambda + API GatewayでAPIを作ってみた
https://dev.classmethod.jp/articles/aws-cdk-101-typescript/

### aws-cdkのインストール

```
npm install -g aws-cdk@1.94.1
cdk --version
1.94.1
```

- Note
anyenv 経由でnodenvを入れている場合、.bash_profileに以下を追記する。

```
# aws-cdk
export PATH="$HOME/.anyenv/envs/nodenv/versions/*/bin:$PATH"
```

### AWS アカウント、リージョン単位で一度だけ実行するコマンド
```
$ cdk bootstrap aws://609014044253/ap-northeast-1
```
CDKで利用するリソースを置いておく S3バケットを作成してくれる。

### プロジェクト作成

```
$ cdk init --language typescript
```

空のディレクトリでしか実行できない。
.git すら存在してはいけない。実行後は.gitやpackage.jsonが作られる。

> Note
トランスパイルにはTypeScriptが使われる。babelやwebpackは使われない。

### マネージドサービスを追加

```
$ npm install @aws-cdk/aws-apigateway @aws-cdk/aws-lambda @aws-cdk/aws-dynamodb
```

### watch mode
Typescript のトランスパイラが随時 Typescript コードを Javascript にコンパイルしてくれるモード。
libの編集時に使う。

```
$ npm run watch
```

### cdk diff
cdk deploy の前に実行する。既存の Stack との差分を見てくれる。

```
$ cdk diff
```

### cdk deploy

```
$ cdk deploy
```

### cdk destroy
料金がかかるのできちんと片付ける。

```
$ cdk destroy
```

### cloudFormationの料金
無料。

### プロジェクトの成果物を実行
> こちらのリリースで動作確認  
https://github.com/Yoshida24/aws-cdk-learning/commit/f62dc64dddba891b2c77725a77412173e62e0c04

```
$ curl -v https://vrnfhieegg.execute-api.ap-northeast-1.amazonaws.com/prod/items/123
```
IDは[API Gateway](https://ap-northeast-1.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-1)から調べる。  
シードデータは都度入れる必要あり。

### 番外:疎通チェック
API Gateway のAPIを辿っていくと疎通チェック画面があり、そこで疎通チェックができる。