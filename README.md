# 物料戰情室 v19.0 Pro

工程物料庫存管理系統 - 即時盤點、追蹤、統計

## 📋 功能特色

- ✅ **即時庫存管理** - 公司倉和現場倉雙倉管理
- ✅ **智能分類** - 自動識別電線、端子、耗材、管材等
- ✅ **快速盤點** - 點擊物料即可快速調整數量
- ✅ **操作人員追蹤** - 記錄每次盤點的操作人員
- ✅ **工地現場清單** - 一鍵查看現場所有物料
- ✅ **統計總覽** - 總品項、低庫存、分類統計
- ✅ **CSV 匯出** - 一鍵匯出庫存資料
- ✅ **PWA 支持** - 可安裝到手機主屏幕（可選）

## 🚀 快速開始

### 1. 部署到 GitHub Pages

1. 將整個 `InventorySystem` 資料夾上傳到 GitHub 倉庫
2. 在 GitHub 倉庫設定中啟用 GitHub Pages
3. 選擇 `main` 分支和 `/` 根目錄
4. 訪問 `https://您的用戶名.github.io/倉庫名/` 即可使用

### 2. 配置後端 API

編輯 `index.html` 第 1227 行，設置您的 Google Apps Script API URL：

```javascript
var API_PRIMARY = '您的Google Apps Script部署URL';
```

### 3. 使用方式

#### 網頁版（推薦給所有用戶）
- 直接打開網址即可使用
- 無需安裝，最簡單方便

#### PWA 安裝版（可選，適合經常使用）
- 打開網址後，進入「設定」頁面
- 點擊「安裝到主屏幕」按鈕
- 安裝後可從手機主屏幕啟動

## 📁 文件說明

```
InventorySystem/
├── index.html              # 主程序文件
├── manifest.json           # PWA 配置文件
├── service-worker.js       # PWA 離線緩存服務
├── icon-192.png           # PWA 圖標 (192x192)
├── icon-512.png           # PWA 圖標 (512x512)
├── icon-generator.html     # 圖標生成工具（可選）
├── PWA-README.md          # PWA 詳細說明
├── README.md              # 本文件
└── .gitignore             # Git 忽略文件
```

## 🔧 後端設置

### Google Apps Script 設置

1. 在 Google Apps Script 中創建新專案
2. 將 `Code.gs.txt` 的內容複製到 `Code.gs`
3. 設置 `SPREADSHEET_ID` 為您的 Google Sheets ID
4. 部署為「網頁應用程式」
5. 執行身份：我
6. 具有存取權的使用者：**所有人**
7. 複製部署 URL 到 `index.html` 的 `API_PRIMARY`

### Google Sheets 結構

需要一個名為 `stock` 的工作表，包含以下欄位：
- ID
- 品名
- 規格
- 單位
- 公司倉數量
- 現場數量
- 安全存量
- 別名（可選）

## 📱 使用說明

### 總覽頁面
- 查看總品項數和低庫存警告
- 查看分類統計圖表
- 查看工地現場物料清單

### 列表頁面
- 搜尋物料（品名、規格）
- 分類篩選（全部、電線、端子、耗材、管材、五金）
- 點擊物料卡片進行盤點

### 盤點操作
1. 點擊物料卡片
2. 選擇操作人員
3. 調整公司倉或現場倉數量
4. 系統自動同步到後端

### 設定頁面
- 切換操作人員
- 匯出 CSV
- 重新載入資料
- 安裝 PWA（可選）

## 🎨 自定義

### 修改分類關鍵詞
編輯 `index.html` 中的 `categoryConfig` 對象（約第 1299 行）

### 修改操作人員
編輯 `index.html` 中的 `OPERATORS` 數組（約第 1126 行）

### 修改主題顏色
編輯 `index.html` 中的 Tailwind 配置和 CSS 樣式

## 🔒 安全注意事項

- API URL 會暴露在代碼中，建議使用 Google Apps Script 的權限控制
- 操作人員記錄會保存到 Google Sheets，請妥善保管
- 建議定期備份 Google Sheets 資料

## 📞 技術支援

如有問題，請檢查：
1. 瀏覽器控制台（F12）的錯誤信息
2. Google Apps Script 執行記錄
3. 網絡連接狀態
4. API URL 是否正確

## 📄 授權

本專案為內部使用工具，請勿用於商業用途。

---

**版本**: v19.0 Pro  
**最後更新**: 2024年12月
