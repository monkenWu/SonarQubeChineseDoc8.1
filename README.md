# SonarQubeChineseDoc8.1

SonarQubeChineseDoc 8.1 繁體中文(台灣)使用手冊翻譯計畫

[查閱最新使用手冊](https://monkenwu.github.io/SonarQubeChineseDoc8.1/)

## 風格指南
中文翻譯的文字排版請以 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) 為主。

繁體中文翻譯請盡量遵守台灣程式設計專業中的詞彙，請注意，中國與台灣在程式開發專業詞彙上的譯名大不相同。

## 提交規範

1. fork 一份完整的程式碼，並克隆該份 fork 至本機。
2. 在主線上產出一條屬於你的分支，於分支上進行翻譯作業。
3. 翻譯結束後預覽翻譯效果，並且重複校稿。
4. 在分支上 push 你所修改的檔案。
5. 回到 github 發出 pull requests。

## 環境部署

- 安裝 nodejs v10
- 安裝 https://yarnpkg.com/en
- 於專案根目錄下執行指令將專案所倚賴的程式庫下載進本機:

```
yarn
```

## 運行伺服器

- 於專案根目錄下執行指令:

```
yarn develop
```