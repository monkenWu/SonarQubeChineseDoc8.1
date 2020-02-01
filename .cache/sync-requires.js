const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-tsx": hot(preferDefault(require("/Users/pooleasee/SonarQubeChineseDoc8.1/src/templates/page.tsx")))
}

