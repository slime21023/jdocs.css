# Just the Docs 設計系統指南

本文檔詳細說明 Just the Docs 設計系統的核心元素、HTML 結構和 CSS 應用方式，方便您使用 UnoCSS 建構一致的文檔網站。

## 目錄

1. [整體頁面結構](#整體頁面結構)
2. [基本容器](#基本容器)
3. [核心組件](#核心組件)
4. [色彩系統](#色彩系統)
5. [排版指南](#排版指南)
6. [CSS 使用指南](#css使用指南)

## 整體頁面結構

Just the Docs 採用兩欄式布局，由側邊欄和主內容區域構成：

```
+-----------------+-------------------------------------------+
|                 |                                           |
|    側邊欄        |              主內容區域                    |
|    (Sidebar)    |              (Main Content)               |
|                 |                                           |
|  - 網站標題      |  - 麵包屑導航                              |
|  - 搜尋框        |  - 頁面標題                                |
|  - 主導航        |  - 內容區域                                |
|  - 導航分組      |  - 頁內目錄                                |
|  - 輔助導航      |  - 頁尾                                    |
|                 |                                           |
+-----------------+-------------------------------------------+
```

## 基本容器

| 容器名稱 | 英文名稱 | HTML 元素 | CSS 類名 | 描述 |
|---------|----------|---------|---------|-----|
| 頁面容器 | Page Container | `<body>` | 無需特殊類 | 包含整個頁面，設為 `display: flex` |
| 側邊欄容器 | Sidebar Container | `<div>` | `jd-sidebar` | 包含網站標題、搜尋框和導航 |
| 主內容容器 | Main Container | `<div>` | `jd-main` | 包含頁面所有內容區域 |
| 內容區域 | Content Area | `<div>` | `jd-content` | 主要文字內容區域 |

## 核心組件

### 1. 導航組件 (Navigation Components)

#### 網站標題 (Site Title)

```html
<div class="jd-site-title">
  <a href="index.html">網站名稱</a>
  <p class="jd-site-desc">網站簡短描述</p>
</div>
```

#### 搜尋框 (Search Bar)

```html
<div class="jd-search">
  <input type="text" placeholder="搜尋文檔..." />
  <button type="button" class="jd-search-btn">搜尋</button>
</div>
```

#### 主導航 (Main Navigation)

```html
<nav class="jd-nav">
  <ul>
    <li class="jd-nav-item"><a href="index.html" aria-current="page">首頁</a></li>
    <li class="jd-nav-item"><a href="about.html">關於</a></li>
  </ul>
</nav>
```

#### 導航分組 (Navigation Group)

```html
<div class="jd-nav-group">
  <div class="jd-nav-group-title">組名稱</div>
  <ul>
    <li class="jd-nav-item"><a href="page1.html">頁面 1</a></li>
    <li class="jd-nav-item"><a href="page2.html">頁面 2</a></li>
  </ul>
</div>
```

#### 可折疊導航 (Collapsible Navigation)

```html
<details class="jd-nav-collapse">
  <summary>可折疊選單</summary>
  <ul>
    <li class="jd-nav-item"><a href="subpage1.html">子頁面 1</a></li>
    <li class="jd-nav-item"><a href="subpage2.html">子頁面 2</a></li>
  </ul>
</details>
```

### 2. 頁面標頭組件 (Page Header Components)

#### 麵包屑導航 (Breadcrumb Navigation)

```html
<nav class="jd-breadcrumb" aria-label="麵包屑導航">
  <ol>
    <li><a href="index.html">首頁</a></li>
    <li><a href="category.html">分類</a></li>
    <li>當前頁面</li>
  </ol>
</nav>
```

#### 頁面標題 (Page Title)

```html
<h1 class="jd-page-title">頁面標題</h1>
```

#### 頁面標籤 (Page Label)

```html
<span class="jd-label jd-label-green">穩定版</span>
<span class="jd-label jd-label-yellow">測試版</span>
<span class="jd-label jd-label-red">已棄用</span>
<span class="jd-label jd-label-blue">新功能</span>
```

### 3. 內容組件 (Content Components)

#### 段落文本 (Paragraph)

```html
<p>段落文本內容。</p>
```

#### 標題層級 (Headings)

```html
<h1>一級標題</h1>
<h2>二級標題</h2>
<h3>三級標題</h3>
<h4>四級標題</h4>
<h5>五級標題</h5>
<h6>六級標題</h6>
```

#### 錨點連結 (Anchor Links)

```html
<h2 id="section-id">
  標題文字
  <a href="#section-id" class="jd-anchor">#</a>
</h2>
```

#### 列表 (Lists)

```html
<ul>
  <li>無序列表項</li>
  <li>包含嵌套列表
    <ul>
      <li>嵌套項目</li>
    </ul>
  </li>
</ul>

<ol>
  <li>有序列表項</li>
  <li>第二項</li>
</ol>

<!-- 任務列表 -->
<ul class="jd-task-list">
  <li><input type="checkbox" checked disabled> 已完成任務</li>
  <li><input type="checkbox" disabled> 未完成任務</li>
</ul>
```

#### 代碼區塊 (Code Block)

```html
<div class="jd-code-container">
  <div class="jd-code-header">
    <span>檔案名稱.js</span>
    <button class="jd-code-copy">複製</button>
  </div>
  <pre><code>// 代碼區塊
function example() {
  return true;
}</code></pre>
</div>
```

#### 內聯代碼 (Inline Code)

```html
<p>這是一個包含 <code>內聯代碼</code> 的段落。</p>
```

#### 告示元件 (Callouts)

```html
<div class="jd-callout jd-callout-info">
  <p><strong>資訊：</strong>這是一個資訊提示框。</p>
</div>

<div class="jd-callout jd-callout-warning">
  <p><strong>警告：</strong>這是一個警告提示框。</p>
</div>

<div class="jd-callout jd-callout-danger">
  <p><strong>危險：</strong>這是一個危險提示框。</p>
</div>

<div class="jd-callout jd-callout-tip">
  <p><strong>提示：</strong>這是一個提示框。</p>
</div>
```

#### 引用區塊 (Blockquote)

```html
<blockquote>
  <p>引用區塊內容</p>
</blockquote>
```

#### 表格 (Table)

```html
<div class="jd-table-wrapper">
  <table>
    <thead>
      <tr>
        <th>標頭 1</th>
        <th>標頭 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>內容 1</td>
        <td>內容 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 按鈕 (Button)

```html
<button class="jd-btn jd-btn-primary">主要按鈕</button>
<button class="jd-btn jd-btn-outline">次要按鈕</button>
<a href="#" class="jd-btn jd-btn-primary">連結按鈕</a>
```

#### 分隔線 (Divider)

```html
<hr class="jd-divider">
```

#### 圖片 (Image)

```html
<figure class="jd-figure">
  <img src="path/to/image.jpg" alt="圖片描述" class="jd-img">
  <figcaption>圖片標題說明</figcaption>
</figure>
```

#### 卡片 (Card)

```html
<div class="jd-card">
  <div class="jd-card-header">卡片標題</div>
  <div class="jd-card-body">
    <p>卡片內容</p>
  </div>
  <div class="jd-card-footer">
    <a href="#" class="jd-btn jd-btn-sm">查看更多</a>
  </div>
</div>
```

#### 頁內目錄 (Table of Contents)

```html
<div class="jd-toc">
  <h2 class="jd-toc-title">本頁目錄</h2>
  <ul>
    <li><a href="#section-1">第一部分</a></li>
    <li>
      <a href="#section-2">第二部分</a>
      <ul>
        <li><a href="#subsection-2-1">子部分 2.1</a></li>
      </ul>
    </li>
  </ul>
</div>
```

### 4. 頁尾組件 (Footer Components)

```html
<footer class="jd-footer">
  <div class="jd-footer-links">
    <a href="about.html">關於我們</a>
    <a href="privacy.html">隱私政策</a>
    <a href="contact.html">聯絡我們</a>
  </div>
  <p class="jd-copyright">© 2025 Just the Docs UnoCSS</p>
</footer>
```

## 色彩系統 (Color System)

| 變量名 | 中文含義 | 用途 | 預設顏色 |
|--------|--------|-----|----------|
| `--jd-color-primary` | 主色調 | 強調色、主按鈕、活動項 | `#2c84fa` |
| `--jd-color-link` | 連結色 | 文字連結 | `#0969da` |
| `--jd-color-text` | 文本色 | 主文本顏色 | `#27262b` |
| `--jd-color-text-light` | 淺文本色 | 次要文本顏色 | `#5c5962` |
| `--jd-color-border` | 邊框色 | 邊框、分隔線 | `#ddd` |
| `--jd-color-bg` | 背景色 | 主背景顏色 | `#ffffff` |
| `--jd-color-sidebar-bg` | 側邊欄背景色 | 側邊欄背景 | `#f5f6fa` |
| `--jd-color-code-bg` | 代碼背景色 | 代碼背景 | `#f5f6fa` |
| `--jd-color-table-header-bg` | 表頭背景色 | 表格標頭背景 | `#f8f8f8` |
| `--jd-color-callout-info` | 資訊提示色 | 資訊提示框 | `#eef4fd` |
| `--jd-color-callout-warning` | 警告提示色 | 警告提示框 | `#fff8e6` |
| `--jd-color-callout-danger` | 危險提示色 | 危險提示框 | `#ffeef0` |
| `--jd-color-callout-tip` | 提示框色 | 提示框 | `#e6f6e6` |
| `--jd-color-label-green` | 綠標籤色 | 穩定版標籤 | `#00c292` |
| `--jd-color-label-yellow` | 黃標籤色 | 測試版標籤 | `#ffb74d` |
| `--jd-color-label-red` | 紅標籤色 | 已棄用標籤 | `#ff5252` |
| `--jd-color-label-blue` | 藍標籤色 | 新功能標籤 | `#448aff` |

## 排版指南 (Typography Guide)

| 元素 | 中文名稱 | 字體大小 | 字體粗細 | 行高 |
|------|---------|---------|---------|-----|
| `body` | 主體文本 | 16px | 常規 (400) | 1.5 |
| `h1` | 一級標題 | 2rem | 粗體 (700) | 1.25 |
| `h2` | 二級標題 | 1.5rem | 粗體 (700) | 1.25 |
| `h3` | 三級標題 | 1.25rem | 粗體 (700) | 1.25 |
| `h4` | 四級標題 | 1.125rem | 粗體 (600) | 1.25 |
| `h5` | 五級標題 | 1rem | 粗體 (600) | 1.25 |
| `h6` | 六級標題 | 0.9rem | 粗體 (600) | 1.25 |
| `.jd-site-title` | 網站標題 | 1.25rem | 粗體 (700) | 1.2 |
| `.jd-site-desc` | 網站描述 | 0.875rem | 常規 (400) | 1.4 |
| `.jd-nav` | 側邊導航 | 0.9rem | 常規 (400) | 1.5 |
| `.jd-breadcrumb` | 麵包屑導航 | 0.875rem | 常規 (400) | 1.5 |
| `code` | 代碼文本 | 0.9em | 常規 (400) | 1.5 |
| `.jd-callout` | 告示框文本 | 0.9rem | 常規 (400) | 1.5 |
| `.jd-footer` | 頁尾文本 | 0.875rem | 常規 (400) | 1.5 |
| `.jd-toc` | 目錄文本 | 0.875rem | 常規 (400) | 1.5 |
| `.jd-label` | 標籤文本 | 0.75rem | 粗體 (600) | 1.5 |

## CSS使用指南 (CSS Usage Guide)

### 基本頁面結構 (Basic Page Structure)

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>頁面標題</title>
  <link rel="stylesheet" href="jdocs.css">
</head>
<body>
  <!-- 側邊欄 -->
  <div class="jd-sidebar">
    <div class="jd-site-title">
      <a href="index.html">網站標題</a>
      <p class="jd-site-desc">網站描述</p>
    </div>
    
    <div class="jd-search">
      <input type="text" placeholder="搜尋文檔..." />
      <button type="button" class="jd-search-btn">搜尋</button>
    </div>
    
    <nav class="jd-nav">
      <ul>
        <li class="jd-nav-item"><a href="index.html" aria-current="page">首頁</a></li>
        <li class="jd-nav-item"><a href="guide.html">指南</a></li>
      </ul>
    </nav>
    
    <div class="jd-nav-group">
      <div class="jd-nav-group-title">組件</div>
      <ul>
        <li class="jd-nav-item"><a href="buttons.html">按鈕</a></li>
        <li class="jd-nav-item"><a href="tables.html">表格</a></li>
      </ul>
    </div>
  </div>

  <!-- 主要內容 -->
  <div class="jd-main">
    <nav class="jd-breadcrumb" aria-label="麵包屑導航">
      <ol>
        <li><a href="index.html">首頁</a></li>
        <li>當前頁面</li>
      </ol>
    </nav>
    
    <h1 class="jd-page-title">頁面標題</h1>
    <span class="jd-label jd-label-blue">新功能</span>

    <div class="jd-content">
      <!-- 頁面內容放這裡 -->
      <p>主要內容...</p>
    </div>

    <footer class="jd-footer">
      <p class="jd-copyright">© 2025 頁尾信息</p>
    </footer>
  </div>
</body>
</html>
```

### 使用 UnoCSS 設定樣式 (Setting Styles with UnoCSS)

1. **安裝 UnoCSS (Install UnoCSS)**

```bash
npm install -D unocss
```

2. **創建 uno.config.js 文件 (Create uno.config.js)**

```javascript
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'jd-primary': '#2c84fa',
      'jd-link': '#0969da',
      'jd-text': '#27262b',
      'jd-text-light': '#5c5962',
      'jd-border': '#ddd',
      'jd-bg': '#ffffff',
      'jd-sidebar-bg': '#f5f6fa',
      'jd-code-bg': '#f5f6fa',
      'jd-table-header-bg': '#f8f8f8',
      'jd-callout-info': '#eef4fd',
      'jd-callout-warning': '#fff8e6',
      'jd-callout-danger': '#ffeef0',
      'jd-callout-tip': '#e6f6e6',
      'jd-label-green': '#00c292',
      'jd-label-yellow': '#ffb74d',
      'jd-label-red': '#ff5252',
      'jd-label-blue': '#448aff',
    },
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
    },
  },
  
  rules: [
    // 基本布局 (Basic Layout)
    ['body', { 
      'font-family': 'var(--sans)',
      'font-size': '16px', 
      'line-height': '1.5', 
      'color': 'var(--jd-text)', 
      'margin': '0',
      'display': 'flex',
      'min-height': '100vh'
    }],
    
    // 側邊欄 (Sidebar)
    ['jd-sidebar', { 
      'width': '250px',
      'padding': '2rem 1rem',
      'background-color': 'var(--jd-sidebar-bg)',
      'border-right': '1px solid var(--jd-border)',
      'flex-shrink': '0',
      'overflow-y': 'auto',
      'height': '100vh',
      'position': 'sticky',
      'top': '0'
    }],
    
    // 網站標題 (Site Title)
    ['jd-site-title', { 'margin-bottom': '2rem' }],
    ['jd-site-title a', { 
      'font-size': '1.25rem', 
      'font-weight': 'bold',
      'color': 'var(--jd-text)',
      'text-decoration': 'none',
      'display': 'block',
      'margin-bottom': '0.5rem' 
    }],
    ['jd-site-desc', { 'margin': '0', 'font-size': '0.875rem', 'color': 'var(--jd-text-light)' }],
    
    // 搜尋框 (Search)
    ['jd-search', { 'margin-bottom': '1.5rem', 'display': 'flex' }],
    ['jd-search input', {
      'padding': '0.5rem',
      'border': '1px solid var(--jd-border)',
      'border-radius': '4px',
      'width': '100%',
      'font-size': '0.875rem'
    }],
    ['jd-search-btn', {
      'background-color': 'var(--jd-primary)',
      'color': 'white',
      'border': 'none',
      'border-radius': '4px',
      'padding': '0.5rem',
      'margin-left': '0.5rem',
      'cursor': 'pointer'
    }],
    
    // 以下依此類推添加其他元素的樣式規則...
  ],
  
  shortcuts: {
    // 按鈕快捷方式 (Button Shortcuts)
    'jd-btn': 'inline-block px-4 py-2 rounded text-center no-underline',
    'jd-btn-primary': 'bg-jd-primary text-white border-0 hover:opacity-90',
    'jd-btn-outline': 'bg-transparent border border-jd-primary text-jd-primary hover:bg-jd-primary hover:text-white',
    'jd-btn-sm': 'px-2 py-1 text-sm',
  },
})
```

3. **生成 CSS 文件 (Generate CSS File)**

```bash
npx unocss "src/**/*.html" -o jdocs.css
```

### 響應式設計 (Responsive Design)

Just the Docs 支援響應式設計，建議添加以下斷點：

| 斷點名稱 | 中文含義 | 尺寸範圍 |
|---------|---------|--------|
| `sm` | 小尺寸 | 640px 以上 |
| `md` | 中尺寸 | 768px 以上 |
| `lg` | 大尺寸 | 1024px 以上 |
| `xl` | 特大尺寸 | 1280px 以上 |

在移動設備上，側邊欄會隱藏或以可切換的方式顯示。

#### 添加響應式支援到 uno.config.js

```javascript
variants: [
  (matcher) => {
    if (matcher.startsWith('sm:')) {
      return {
        matcher: matcher.slice(3),
        selector: (s) => `@media (min-width: 640px) { ${s} }`,
      }
    }
  },
  (matcher) => {
    if (matcher.startsWith('md:')) {
      return {
        matcher: matcher.slice(3),
        selector: (s) => `@media (min-width: 768px) { ${s} }`,
      }
    }
  },
  // 添加其他斷點...
]
```

### 最佳實踐 (Best Practices)

1. **語義化標記 (Semantic Markup)**：優先使用原生 HTML 元素表達內容含義
2. **簡化容器 (Minimize Containers)**：僅在必要時使用容器元素和類名
3. **保持一致性 (Maintain Consistency)**：遵循文檔中定義的色彩和排版系統
4. **可訪問性 (Accessibility)**：為導航元素添加適當的 ARIA 屬性，如 `aria-current="page"`

通過遵循以上指南，您可以使用原生 HTML 元素和少量必要的容器類創建完全符合 Just the Docs 設計的頁面。