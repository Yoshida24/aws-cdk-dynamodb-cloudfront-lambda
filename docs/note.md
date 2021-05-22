# ノート
cdkの使い方について

## aws-cdkのインストール

```
npm install -g aws-cdk@1.94.1
cdk --version
1.94.1
```

> Note:  
anyenv 経由でnodenvを入れている場合、.bash_profileにパスを通す。
> ```
> # aws-cdk
> export PATH="$HOME/.anyenv/envs/nodenv/versions/*/bin:$PATH"
> ```

## AWS アカウント、リージョン単位で一度だけ実行するコマンド
CDKで利用するリソースを置いておく S3バケットを作成してくれる。
```
$ cdk bootstrap aws://609014044253/ap-northeast-1
```


## プロジェクト作成

```
$ cdk init --language typescript
```

空のディレクトリでしか実行できない。  
（.git もダメなので先にリモートリポジトを作ると二度手間になる。注意）  
実行後は.gitやpackage.jsonが作られる。

> Note:  
トランスパイルにはTypeScript（tscコマンド相当）が使われる。babelやwebpackは使われない。

## aws cdk にマネージドサービスを追加

```
$ npm install @aws-cdk/aws-apigateway @aws-cdk/aws-lambda @aws-cdk/aws-dynamodb
```

## watch mode
Typescript のトランスパイラが随時 Typescript コードを Javascript にコンパイルしてくれるモード。
libの編集時に使う。

```
$ npm run watch
```

## cdk diff
cdk deploy の前に実行する。既存の Stack との差分を見てくれる。

```
$ cdk diff
```

## cdk deploy

```
$ cdk deploy
```

## cdk destroy
料金がかかるのできちんと片付ける。

```
$ cdk destroy
```

## cloudFormationの料金
無料。

## プロジェクトの成果物を実行
> こちらのリリースで動作確認  
https://github.com/Yoshida24/aws-cdk-learning/commit/f62dc64dddba891b2c77725a77412173e62e0c04

下記APIの結果が帰ってくるか確認
```
$ curl -v https:/{{ID}}.execute-api.ap-northeast-1.amazonaws.com/prod/items/123

// {123: "豆腐"}
```
IDは[API Gateway](https://ap-northeast-1.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-1)から調べる。  
シードデータはdynamodbの新規作成の都度入れる必要あり。


## アイテム追加
```
$ aws dynamodb put-item --table-name products --item '{"id":{"S":"1"},"name":{"S":"豆腐"}}'
```

## 番外:API Gatewayの疎通チェック
API Gateway のAPIを辿っていくと疎通チェック画面があり、そこで疎通チェックができる。

## 参考文献
[\[AWS CDK超入門\] DynamoDB + Lambda + API GatewayでAPIを作ってみた](https://dev.classmethod.jp/articles/aws-cdk-101-typescript/)
