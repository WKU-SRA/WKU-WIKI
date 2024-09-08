# WKU-SRA-WIKI

Hi, WKU-SRA-WIKI is a vault of knowledge, especially research information, philosophy, and learning for students at WKU. It was developed, maintained, and deployed by the members of the WKU-SRA. It's more than just a research manual; it's a living and collective wisdom and passion of its creators.

The primary content of our website is currently in Chinese. Because Wenzhou-Kean University (WKU) is a Sino-US joint school. We are considering the possibility of offering an English version of our website. Should you be interested in contributing to such a translation effort, your assistance would be greatly appreciated.

## Table of Contents

- [Tech Stack](#major-tech-stack)
- [Introduction](#introduction)
- [Installation](#installation)
- [Contributing](#contributing)
- [Git Workflow ](#git-workflow)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Primary Tech Stack

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
- [tabler](https://tabler.io)

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
git clone https://github.com/WKU-SRA/WKU-WIKI.git ./THE_NAME_YOU_LIKE
cd ./THE_NAME_YOU_LIKE
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

Or you can use an editor

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

[MIT]() © [WKU-SRA](https://github.com/WKU-SRA)

## Acknowledgements

- Special thanks to [Timothy](https://github.com/timlrx), we used his starter templete.
- Thanks to the open source community
- Thanks to all contributors
