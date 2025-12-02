---
title: 'Contributing - Python Cheatsheet'
description: The following is a set of guidelines for contributing to the Python cheatsheet. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document.
date: June 09, 2018
updated: August 03, 2025
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Contributing
</base-title>

First off, thank you for considering contributing to the Python Cheatsheet! It's people like you that make this project a great resource for the Python community.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

The following is a set of guidelines for contributing. These are mostly guidelines, not rules. Use your best judgment, and please don't hesitate to propose changes to [this document](https://github.com/labex-labs/python-cheatsheet/blob/master/src/pages/contributing.md).

## Code of Conduct

This project and everyone who participates in it is governed by the [Contributor Covenant Code of Conduct](https://github.com/labex-labs/python-cheatsheet/blob/master/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to services@github.com.

## How Can I Contribute?

There are many ways to contribute, from writing code and documentation to submitting bug reports and feature requests.

- **Reporting Bugs:** If you find a bug, please open an [Issue](https://github.com/labex-labs/python-cheatsheet/issues) and provide as much information as possible.
- **Suggesting Enhancements:** Have an idea for a new feature or an improvement to an existing one? Open an [Issue](https://github.com/labex-labs/python-cheatsheet/issues) to discuss it.
- **Writing Content:** You can add new cheatsheet pages, blog posts, or improve existing content.
- **Pull Requests:** If you're ready to contribute code or content, we welcome your [Pull Requests](https://github.com/labex-labs/python-cheatsheet/pulls).

## Getting Started: Setting Up the Project Locally

Ready to start contributing? Here’s how to set up the project on your local machine.

1.  **Fork the Repository**

    Start by [forking the repository](https://github.com/labex-labs/python-cheatsheet/fork) to your own GitHub account.

2.  **Clone Your Fork**

    Clone your forked repository to your local machine:

    ```bash
    git clone https://github.com/YOUR_USERNAME/python-cheatsheet.git
    cd python-cheatsheet
    ```

3.  **Install pnpm**

    This project uses [pnpm](https://pnpm.io/installation) as its package manager. If you don't have it, install it:

    On Linux/macOS:

    ```bash
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    ```

    On Windows (PowerShell):

    ```bash
    iwr https://get.pnpm.io/install.ps1 -useb | iex
    ```

4.  **Install Dependencies**

    Install the project dependencies using pnpm:

    ```bash
    pnpm install
    ```

5.  **Create a New Branch**

    Create a descriptive branch for your changes:

    ```bash
    git checkout -b your-branch-name
    ```

    For example: `git checkout -b feat/add-asyncio-cheatsheet` or `git checkout -b fix/typo-in-basics`.

6.  **Run the Development Server**

    Start the local development server to see your changes live:

    ```bash
    pnpm dev
    ```

    The site will be available at `http://localhost:3333`.

## Making and Submitting Changes

### Content Contribution Guide

#### Adding a New Cheatsheet Page

1.  Create a new Markdown file in `docs/cheatsheet/en/` directory.
2.  **Important:** English documentation must be placed in the `en/` subdirectory. Do not create translations for other languages - i18n translations will be handled automatically by scripts during deployment.
3.  Add the following frontmatter and structure:

    ```markdown
    ---
    title: Topic Name - Python Cheatsheet
    description: Brief description of the topic
    ---

    <base-title :title="frontmatter.title" :description="frontmatter.description">
    Topic Name
    </base-title>

    ## Section 1

    Your content here...
    ```

4.  Add the new page to the navigation in `src/store/navigation.ts`.

#### Adding a New Module Documentation

1.  Create a new Markdown file in `docs/modules/en/` directory.
2.  **Important:** English documentation must be placed in the `en/` subdirectory. Do not create translations for other languages - i18n translations will be handled automatically by scripts during deployment.
3.  Add the following frontmatter and structure:

    ```markdown
    ---
    title: Python Module Name - Python Cheatsheet
    description: Brief description of the module
    ---

    <base-title :title="frontmatter.title" :description="frontmatter.description">
    Python Module Name
    </base-title>

    [Module](https://docs.python.org/3/library/module.html) description...

    ## Section 1

    Your content here...

    ## Relevant links

    - <router-link to="/cheatsheet/...">Cheatsheet: ...</router-link>
    - <router-link to="/modules/...">Module: ...</router-link>
    ```

4.  Use ` ```output ` code blocks to display code execution outputs separately for better visual presentation.

#### Adding a New Blog Post

1.  Create a new Markdown file in `docs/blog/en/` directory.
2.  **Important:** English documentation must be placed in the `en/` subdirectory. Do not create translations for other languages - i18n translations will be handled automatically by scripts during deployment.
3.  Use this template for your blog post:

    ```markdown
    ---
    title: Post Title - Python Cheatsheet
    description: Post description
    date: MMM DD, YYYY
    updated: MMM DD, YYYY
    tags: python, topic, level
    socialImage: /blog/image.jpg
    ---

    <route lang="yaml">
    meta:
        layout: article
        # You must duplicate the frontmatter here for SSG
        title: Post Title - Python Cheatsheet
        description: Post description
        date: MMM DD, YYYY
        updated: MMM DD, YYYY
        tags: [python, topic, level]
        socialImage: /blog/image.jpg
    </route>

    <blog-title-header :frontmatter="frontmatter" title="Display Title" />

    Your blog content here...
    ```

### Running Linters and Type Checking

Before submitting your changes, make sure your code adheres to the project's style and passes all checks:

```bash
pnpm lint
pnpm typecheck
```

### Submitting Your Changes

1.  **Commit Your Changes**

    Add and commit your changes with a clear and descriptive message:

    ```bash
    git add .
    git commit -m "feat: Add cheatsheet for XYZ"
    ```

2.  **Push to Your Fork**

    Push your branch to your fork on GitHub:

    ```bash
    git push origin your-branch-name
    ```

3.  **Open a Pull Request**

    Go to the original repository and open a [new pull request](https://github.com/labex-labs/python-cheatsheet/pulls). Provide a clear title and description of your changes.

Thank you for your contribution!
