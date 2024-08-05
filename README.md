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


# WKU-SRA-WIKI

![WKU-SRA-WIKI Logo](https://github.com/WKU-SRA/WKU-WIKI/raw/main/public/static/images/logo.png)

## 欢迎来到 WKU-SRA-WIKI

此文档中文为AI翻译，若有任何错误，请直接修改并提交 PR，我们推荐你阅读英文文档。

WKU-SRA-WIKI 是一个知识宝库，尤其是研究信息和哲学方面的知识，它是温州肯恩大学（Wenzhou-Kean University, WKU）学生的学习灯塔，由 WKU-SRA 的成员开发、维护和部署。它不仅仅是一本研究手册；它是其创造者的集体智慧和热情的体现。

本站内容以中文撰写，因为 WKU 是一所中美合作办学机构。我们尚未决定是否将网站的主要语言更改为英文，但如果您愿意将我们的网站翻译成英文，我们将不胜感激。

## 目录

- [技术栈](#技术栈)
- [简介](#简介)
- [快速开始](#快速开始)
- [安装](#安装)
- [贡献](#贡献)
- [Git 工作流程](#git-工作流程)
- [许可证](#许可证)
- [致谢](#致谢)

## 主要技术栈

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [PostCSS](https://postcss.org)
- [Yarn](https://yarnpkg.com)
- [Esbuild](https://esbuild.github.io)
- [React KaTeX](https://react-katex.now.sh) （尚未使用，但很可能会被用来渲染 LaTeX）

## 简介

WKU-SRA-WIKI 是一个开源项目，旨在为 WKU 的学生提供全面的研究报告手册。无论你是刚开始研究的新手还是经验丰富的研究者，这本手册都将提供有价值的信息和资源。

## 快速开始

1. 克隆仓库
   ```bash
   git clone https://github.com/WKU-SRA/WKU-WIKI.git
安装
bash
yarn
请注意，如果您使用的是 Windows 系统，可能需要运行以下命令：

```bash
$env:PWD = $(Get-Location).Path
```
开发
首先，运行开发服务器：

```bash
yarn dev
```
使用浏览器打开 http://localhost:3000 开始愉快的编码。

贡献
我们欢迎各种形式的贡献！如果您有任何建议或发现任何问题，请提交问题或创建一个拉取请求。

贡献步骤：

1. Fork 这个仓库。
2. 创建您的功能分支 (git checkout -b feature/your-feature)。
3. 提交您的更改 (git commit -am "您更改的描述")。
4. 推送到分支 (git push origin feature/your-feature)。
5. 创建一个新的 Pull Request。

## Git 工作流程
目前我们没有一个正式的工作流程，最终的工作流程模板将在开发过程中确定，并最终记录在文档中。

Fork 仓库：在 GitHub 上的仓库页面点击右上角的 "Fork" 按钮。

克隆您的 fork：

```bash
git clone https://github.com/your-username/wku-sra-wiki.git
cd wku-sra-wiki
```
创建一个新的分支：

```bash
git checkout -b my-feature-branch
```
进行您的更改：实现您的功能或修复错误。

提交您的更改：

```bash
git add .
git commit -m "您更改的描述"
Git 提交信息规范
```

为了保持干净易读的提交历史，我们遵循 Conventional Commits 规范。以下是一些示例：

feat: 添加新功能
fix: 修复一个错误
docs: 更新文档
style: 代码格式化
refactor: 重构代码
test: 添加或更新测试
chore: 更新构建任务，包管理器配置等
推送到您的 fork：

```bash
git push origin my-feature-branch
```
创建 Pull Request：转到 GitHub 上的原始仓库并点击 "New Pull Request" 按钮。清晰地描述您的更改并提交拉取请求。

许可证
MIT © WKU-SRA

致谢
特别感谢 Timothy，我们使用了他的基础模板。
感谢开源社区。
感谢所有贡献者。

---
贡献者：  

<a href="https://wkusci.com">
温肯科协
</a>

