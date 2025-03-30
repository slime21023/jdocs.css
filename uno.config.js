import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetTypography from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    colors: {
      // 淺色主題
      primary: '#007bff', // 主色：藍色，符合 Just the Docs 的設計
      primaryDark: '#0056b3', // 主色的深色變體
      secondary: '#f8f9fa', // 側邊欄背景色
      link: '#007bff', // 鏈接顏色
      linkHover: '#0056b3', // 鏈接懸停顏色
      bodyText: '#212529', // 主文字顏色：深灰色
      bodyHeading: '#212529', // 標題文字顏色：深灰色
      navText: '#6c757d', // 側邊欄文字顏色：次文字顏色
      navBg: '#f8f9fa', // 側邊欄背景色
      navBorder: '#dee2e6', // 側邊欄邊框顏色
      sidebarColor: '#6c757d', // 側邊欄鏈接文字顏色
      codeBg: '#f8f9fa', // 代碼塊背景色
      tableBorder: '#dee2e6', // 表格邊框顏色
      tableHeaderBg: '#f1f3f5', // 表格表頭背景色

      // 深色主題
      darkPrimary: '#4dabf7', // 深色模式主色：淺藍色
      darkPrimaryDark: '#339af0', // 深色模式主色的深色變體
      darkSecondary: '#343a40', // 深色模式的側邊欄背景色
      darkLink: '#4dabf7', // 深色模式鏈接顏色
      darkLinkHover: '#339af0', // 深色模式鏈接懸停顏色
      darkBodyText: '#e9ecef', // 深色模式主文字顏色
      darkBodyHeading: '#f8f9fa', // 深色模式標題文字顏色
      darkNavText: '#adb5bd', // 深色模式側邊欄文字顏色
      darkNavBg: '#212529', // 深色模式側邊欄背景色
      darkNavBorder: '#343a40', // 深色模式側邊欄邊框顏色
      darkSidebarColor: '#ced4da', // 深色模式側邊欄鏈接文字顏色
      darkCodeBg: '#2b2b3d', // 深色模式代碼塊背景色
      darkTableBorder: '#495057', // 深色模式表格邊框顏色
      darkTableHeaderBg: '#343a40', // 深色模式表格表頭背景色
    },
    fontFamily: {
      sans: ['"Noto Sans"', 'system-ui', 'sans-serif'], // 正文字體
      mono: ['"SFMono-Regular"', 'Menlo', 'Consolas', 'monospace'], // 代碼字體
    },
  },
  shortcuts: {
    // 淺色主題快捷方式
    'nav-link': 'text-navText hover:text-link transition-colors duration-200 text-sm no-underline',
    'nav-link-active': 'text-primary font-medium',
    'sidebar-item': 'py-2 text-sidebarColor hover:text-primary transition-colors',
    'btn': 'inline-block px-4 py-2 rounded text-white transition-colors no-underline text-center',
    'btn-primary': 'btn bg-primary hover:bg-primaryDark',
    'btn-outline': 'btn bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
    'heading': 'font-medium text-bodyHeading mt-6 mb-4',
    'link': 'text-link hover:text-linkHover transition-colors',
    'docs-table': 'w-full border-collapse my-4',
    'table-cell': 'border border-tableBorder p-3 text-sm',
    'table-header': 'bg-tableHeaderBg font-medium text-left',
    'code-block': 'bg-codeBg p-4 rounded my-4 overflow-x-auto font-mono text-sm',
    'inline-code': 'bg-codeBg px-1.5 py-0.5 rounded font-mono text-sm',
    'main-content': 'px-4 py-8 md:px-8 max-w-4xl mx-auto',
    'sidebar': 'w-64 bg-navBg border-r border-navBorder p-4 h-screen fixed overflow-y-auto',
    'content-with-sidebar': 'ml-0 md:ml-64 transition-all',

    // 深色主題快捷方式
    'dark-nav-link': 'text-darkNavText hover:text-darkLink transition-colors duration-200 text-sm no-underline',
    'dark-nav-link-active': 'text-darkPrimary font-medium',
    'dark-sidebar-item': 'py-2 text-darkSidebarColor hover:text-darkPrimary transition-colors',
    'dark-btn-primary': 'btn bg-darkPrimary hover:bg-darkPrimaryDark',
    'dark-btn-outline': 'btn bg-transparent border border-darkPrimary text-darkPrimary hover:bg-darkPrimary hover:text-white',
    'dark-heading': 'font-medium text-darkBodyHeading mt-6 mb-4',
    'dark-link': 'text-darkLink hover:text-darkLinkHover transition-colors',
    'dark-docs-table': 'w-full border-collapse my-4',
    'dark-table-cell': 'border border-darkTableBorder p-3 text-sm',
    'dark-table-header': 'bg-darkTableHeaderBg font-medium text-left',
    'dark-code-block': 'bg-darkCodeBg p-4 rounded my-4 overflow-x-auto font-mono text-sm',
    'dark-inline-code': 'bg-darkCodeBg px-1.5 py-0.5 rounded font-mono text-sm',
    'dark-sidebar': 'w-64 bg-darkNavBg border-r border-darkNavBorder p-4 h-screen fixed overflow-y-auto',
  },
  safelist: [
    // 預生成的類名
    'heading',
    'link',
    'btn-primary',
    'btn-outline',
    'nav-link',
    'nav-link-active',
    'sidebar-item',
    'docs-table',
    'table-cell',
    'table-header',
    'code-block',
    'inline-code',
    'main-content',
    'sidebar',
    'content-with-sidebar',

    // 深色模式的類名
    'dark-nav-link',
    'dark-nav-link-active',
    'dark-sidebar-item',
    'dark-btn-primary',
    'dark-btn-outline',
    'dark-heading',
    'dark-link',
    'dark-docs-table',
    'dark-table-cell',
    'dark-table-header',
    'dark-code-block',
    'dark-inline-code',
    'dark-sidebar',
  ],
})
