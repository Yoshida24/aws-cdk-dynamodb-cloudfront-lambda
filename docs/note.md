# ノート

[AWS CDK超入門] DynamoDB + Lambda + API GatewayでAPIを作ってみた
https://dev.classmethod.jp/articles/aws-cdk-101-typescript/

### AWS アカウント、リージョン単位で一度だけ実行するコマンド
```
$ cdk bootstrap aws://609014044253/ap-northeast-1
```
CDKで利用するリソースを置いておく S3 バケットを作成してくれる。