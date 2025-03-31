import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [],

  theme: {
    colors: {
      primary: '#2c84fa',
      link: '#0969da', 
      linkHover: '#0056b3',
      text: '#27262b',
      textLight: '#5c5962',
      border: '#ddd',
      bg: '#ffffff',
      sidebar: '#f5f6fa',
      codeBg: '#f5f6fa',
      blockquoteBorder: '#eee',
      tableHeaderBg: '#f8f8f8',
    },
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
    },
  },

  // 定義基本樣式規則
  rules: [
    // 全局樣式
    ['*', { 'box-sizing': 'border-box' }],
    ['body', { 
      'font-family': 'var(--sans)',
      'font-size': '16px', 
      'line-height': '1.5', 
      'color': 'var(--text)', 
      'margin': '0',
      'display': 'flex',
      'min-height': '100vh'
    }],
    
    // 側邊欄
    ['sidebar', { 
      'width': '250px',
      'padding': '2rem 1rem',
      'background-color': 'var(--sidebar)',
      'border-right': '1px solid var(--border)',
      'flex-shrink': '0',
      'overflow-y': 'auto',
      'height': '100vh',
      'position': 'sticky',
      'top': '0'
    }],
    
    // 站點標題
    ['site-title', { 'margin-bottom': '2rem' }],
    ['site-title a', { 
      'font-size': '1.25rem', 
      'font-weight': 'bold',
      'color': 'var(--text)',
      'text-decoration': 'none',
      'display': 'block',
      'margin-bottom': '0.5rem' 
    }],
    ['site-title p', { 'margin': '0', 'font-size': '0.875rem', 'color': 'var(--textLight)' }],
    
    // 導航
    ['nav ul', { 'list-style': 'none', 'padding': '0', 'margin': '0' }],
    ['nav li', { 'margin-bottom': '0.25rem' }],
    ['nav a', { 
      'display': 'block', 
      'padding': '0.375rem 0', 
      'color': 'var(--text)', 
      'text-decoration': 'none',
      'font-size': '0.9rem'
    }],
    ['nav a:hover', { 'color': 'var(--primary)' }],
    ['nav a[aria-current="page"]', { 
      'color': 'var(--primary)', 
      'font-weight': '600'
    }],
    
    // 主要內容區域
    ['main', { 
      'flex': '1',
      'max-width': '900px',
      'padding': '2rem',
      'overflow-x': 'auto'
    }],
    
    // 主要內容標題區域
    ['main-header', { 'margin-bottom': '2.5rem' }],
    ['breadcrumb', { 'font-size': '0.875rem', 'margin-bottom': '0.5rem', 'color': 'var(--textLight)' }],
    ['breadcrumb a', { 'color': 'var(--link)', 'text-decoration': 'none' }],
    ['breadcrumb a:hover', { 'text-decoration': 'underline' }],
    ['main-header h1', { 'margin': '0', 'font-size': '2rem', 'font-weight': '700' }],
    
    // 內容
    ['content', { 'max-width': '800px' }],
    ['content section', { 'margin-bottom': '3rem' }],
    
    // 標題樣式
    ['h1', { 'font-size': '2rem', 'margin-top': '0', 'margin-bottom': '1rem' }],
    ['h2', { 'font-size': '1.5rem', 'margin-top': '1.5rem', 'margin-bottom': '1rem', 'border-bottom': '1px solid var(--border)', 'padding-bottom': '0.5rem' }],
    ['h3', { 'font-size': '1.25rem', 'margin-top': '1.5rem', 'margin-bottom': '0.75rem' }],
    ['h4', { 'font-size': '1.125rem', 'margin-top': '1.5rem', 'margin-bottom': '0.75rem' }],
    
    // 段落和列表
    ['p', { 'margin-top': '0', 'margin-bottom': '1rem' }],
    ['ul, ol', { 'padding-left': '1.5rem', 'margin-bottom': '1rem' }],
    ['li', { 'margin-bottom': '0.25rem' }],
    ['li ul, li ol', { 'margin-top': '0.25rem', 'margin-bottom': '0.5rem' }],
    
    // 連結
    ['a', { 'color': 'var(--link)', 'text-decoration': 'none' }],
    ['a:hover', { 'color': 'var(--linkHover)', 'text-decoration': 'underline' }],
    
    // 代碼
    ['code', { 
      'font-family': 'var(--mono)', 
      'background-color': 'var(--codeBg)', 
      'padding': '0.2rem 0.4rem', 
      'border-radius': '0.25rem', 
      'font-size': '0.9em' 
    }],
    ['pre', { 
      'background-color': 'var(--codeBg)', 
      'padding': '1rem', 
      'border-radius': '0.25rem', 
      'overflow-x': 'auto', 
      'margin-bottom': '1rem' 
    }],
    ['pre code', { 'padding': '0', 'background-color': 'transparent', 'border-radius': '0' }],
    
    // 引用
    ['blockquote', { 
      'margin': '1rem 0', 
      'padding': '0.75rem 1rem', 
      'border-left': '0.25rem solid var(--blockquoteBorder)', 
      'color': 'var(--textLight)' 
    }],
    ['blockquote p', { 'margin': '0' }],
    
    // 表格
    ['table', { 'width': '100%', 'border-collapse': 'collapse', 'margin-bottom': '1.5rem' }],
    ['th', { 
      'border': '1px solid var(--border)', 
      'padding': '0.75rem', 
      'text-align': 'left',
      'background-color': 'var(--tableHeaderBg)' 
    }],
    ['td', { 'border': '1px solid var(--border)', 'padding': '0.75rem' }],
    
    // 頁尾
    ['footer', { 'margin-top': '4rem', 'padding-top': '2rem', 'border-top': '1px solid var(--border)', 'font-size': '0.875rem', 'color': 'var(--textLight)' }]
  ],

  shortcuts: {
    'btn': 'inline-block px-4 py-2 border border-transparent rounded bg-primary text-white hover:(bg-opacity-90)',
  },

  // 響應式設計
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
    }
  ],
})
