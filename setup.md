## Node.jsのダウンロード
- v24.18.0(LTS)をWindowsインストーラーでインストール
  https://nodejs.org/en/download
- インストールの確認
```powershell
node -v #上手くいかないときはVSCodeを再起動
```
## React環境の立ち上げ
```powershell
# 1.package.jsonを自動生成
npm init -y

# 2.ライブラリのインストール
npm install react react-dom
npm install -D vite @types/react @types/react-dom @vitejs/plugin-react
```

## 設定ファイルの作成
```powershell
code vite.config.js
```
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    Plugin: [react()]
})
```

## 起動スイッチ(package.json)の書き換え
```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```