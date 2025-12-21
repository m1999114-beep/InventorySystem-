# 📦 部署清單

## ✅ 必需文件（必須上傳）

- [x] `index.html` - 主程序
- [x] `manifest.json` - PWA 配置
- [x] `service-worker.js` - PWA 服務
- [x] `icon-192.png` - 圖標
- [x] `icon-512.png` - 圖標

## 📝 說明文件（建議上傳）

- [x] `README.md` - 使用說明
- [x] `PWA-README.md` - PWA 詳細說明
- [x] `.gitignore` - Git 配置

## 🔧 工具文件（可選）

- [ ] `icon-generator.html` - 圖標生成工具
- [ ] `Code.gs.txt` - 後端代碼參考
- [ ] `test.html` - 測試文件

## 🚀 上傳到 GitHub 步驟

1. 在 GitHub 創建新倉庫
2. 將整個 `InventorySystem` 資料夾內容上傳
3. 啟用 GitHub Pages：
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, / (root)
4. 訪問：`https://您的用戶名.github.io/倉庫名/`

## ⚙️ 部署後設置

1. 編輯 `index.html` 設置 API URL（第 1227 行）
2. 確保 Google Apps Script 已正確部署
3. 測試功能是否正常

