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
cd ai-tase-manager
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

## Rustのインストール
https://rustup.rs/
cmdが立ち上がったら「1」でEnter
もう一度「1」でEnter

## Tauri CLIのインストール
```powershell
# インストール
npm install -D @tauri-apps/cli@latest
# 初期設定
npx tauri init
✔What is your app name? · ai-task-manager
✔ What should the window title be? · AItam
? Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir>/src-tauri/tauri.conf.json" file that will be created? › ../d
✔ Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir>/src-tauri/tauri.conf.json" file that will be created? · ../dist
✔ What is the url of your dev server? · http://localhost:5173
✔ What is your frontend dev command? · npm run dev
✔ What is your frontend build command? · npm run build
# 起動確認
npx tauri dev
```