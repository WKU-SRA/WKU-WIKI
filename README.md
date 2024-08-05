# WKU-SRA-WIKI

![/Users/albert/Desktop/wku/wku-sra-wiki/public/static/images/logo.png]
Hi, WKU-SRA-WIKI is a vault of knowledge especially research information and philosophy, a beacon of learning for students at WKU, deveolped, mantained, deployed by the members of the WKU-SRA. It's more than just a research manual; it's a living and collective wisdom and passion of its creators.

The contents are written in Chinese cause WKU (Wenzhou-Kean University) is a Sino-US joint school, and we haven' t make a choice whether to use English as the main language of our website, but if you want to translate our website to English, we will appreciate you.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Introduction](#introduction)
- [Installation](#installation)
- [Contributing](#contributing)
- [Git Workflow ](#git-workflow)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Major Tech Stack

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [PostCSS](https://postcss.org)
- [Yarn](https://yarnpkg.com)
- [Esbuild](https://esbuild.github.io)
- [React KaTeX](https://react-katex.now.sh) not used, but most likely will be used to render LaTex

## Introduction

WKU-SRA-WIKI is an open-source project aimed at providing a comprehensive research manual for students at WKU. Whether you are a beginner just starting out in research or an experienced researcher, this manual will provide valuable information and resources.

## Quick Start

1. Clone the repo

```bash
git clone https://github.com/WKU-SRA/WKU-WIKI.git
```

## Installation

```bash
yarn
```

Please note, that if you are using Windows, you may need to run:

```bash
$env:PWD = $(Get-Location).Path
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and happy hacking

## Contributing

We welcome contributions of any kind! If you have any suggestions or find any issues, please submit an issue or create a pull request.

Steps to contribute:

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -a `).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

### Git Workflow

It is not a formal workflow, the final workflow templete will be decided during the developed circle and finally documented

Fork the repository: Click the "Fork" button at the top right corner of the repository page on GitHub.

Clone your fork:

```bash
git clone https://github.com/your-username/wku-sra-wiki.git
cd wku-sra-wiki
```

Create a new branch:

```git
git checkout -b my-feature-branch
Make your changes: Implement your feature or fix the bug.
```

Commit your changes:

```bash
git add .
git commit -m "Description of your changes"
```

Git Commit Message Convention
To maintain a clean and readable commit history, we follow the Conventional Commits specification. Here are some examples:

feat: add new feature
fix: fix a bug
docs: update documentation
style: format code
refactor: refactor code
test: add or update tests
chore: update build tasks, package manager configs, etc.

Push to your fork:

```bash
git push origin my-feature-branch
git push origin my-feature-branch
```

Create a Pull Request: Go to the original repository on GitHub and click the "New Pull Request" button. Provide a clear description of your changes and submit the pull request.

## License

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)

## Acknowledgements

- Special thanks to [Timothy](https://github.com/timlrx), we used his starter templete.
- Thanks to the open source community
- Thanks to all contributors
