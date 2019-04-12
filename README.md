# serverless-crud-react-app

## 環境

### フロントエンド

- node 11.10.1
- react 16.8.6
  - redux 6.0
  - redux-form 8.1.0
  - redux-thunk 2.3.0
  - axios 0.18.0
  - lodash 4.17.11
  - react-dom 16.8.6
  - react-router-dom 5.0.0
  - material-ui 3.9.3

### サーバサイド

- serverless framework 1.38.0
- node 8.10
- AWS
  - CodePipeline
  - CodeBuild
  - CloudFront
  - API Gateway
  - Lambda
  - S3

### データベース

- AWS
  - DynamoDB

---

## 仕様

### 操作

- 「ADD NEW POST」 ボタンでtodoを作成
- 「EDIT」 でtodoを編集
- 「DELETE」 でtodoを削除

### 特徴
- material-uiによるレスポンシブ。モバイルでの編集可能
- AWS CodePipeline・CodeBuildによるデプロイの自動化
  Githubにアップロードで自動デプロイ
- serverless frameworkによりAWSのバックエンドアーキテクチャの自動化

---

## 本番ページ

[本番ページ](https://d1tf43lpshaag3.cloudfront.net/)