# Dunedain Demo

This requires ES 2017 and CSS variables browser support, which means browsers in the past 8 years
approximately. It can be shimmed or polyfilled to support older browsers if necessary.

## Features

* Accessibility Checks (a11y)
* Ancillary Tool Scripts / Task Runners
* Automated Spellcheck
* Conventional Commits Linting
* EditorConfig Support
* Gated Commits (overridden with --no-verify)
* Git Attributes for LFS Support
* Internationalization (i18n)
* Localization (l10n)
* Lint Config Overrides
* Markdown GitHub Preview
* Markdown Linting
* Material UI
* Next.js App Routing
* System Memory Checks
* Strict NVM and NPM Checks
* VS Code Extension Recommendations
* VS Code Workspace Settings

## Customizing

By default Next.js doesn't allow turning off an info message when linting. You can run this command
in Linux/Unix after an `npm i` to do just that.

```bash
grep -irl '`.*- Need to disable some ESLint rules?' \
  node_modules/next/dist/{esm,lib} | xargs \
  sed -i -e 's/`.*- Need to disable some ESLint rules?.*`/'\'\''/g'
```

## Notes

Next.js 15 requires Node.js 18+, but we default the minimtum version to the latest LTS
release of 22.15 at the time of this writing, which includes support for things like
`import.meta.dirname`.
