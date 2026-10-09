
[![Project Status](https://img.shields.io/badge/status-under%20development-yellow)](https://github.com/your-username-or-organizations/your-repo-name)


# wiki_test




**What is included on this project?**

📦 A basic `pyproject.toml` file to provide installation, packaging and distribution for your project.

🧪 Testing structure using [Pytest](https://docs.pytest.org/en/latest/).

✅ Code linter [Ruff](https://github.com/charliermarsh/ruff).

✏️ Code formatter using [Black](https://github.com/psf/black).

🤝 Typing checking using [Mypy](https://mypy.readthedocs.io/en/stable/).

🔄 Continuous integration using [Github Actions](https://github.com/your-username-or-organizations/your-repo-name/blob/main/.github/workflows) with jobs to check the quality of your code.

📃 Documentation with [Sphinx](https://www.sphinx-doc.org/en/master/) and [Readthedocs](https://readthedocs.org/).



## Project structure


This repository contains the following files and folders:

```
📦 Repository
 ┣ 📁 .github : contain the github settings
 ┃ ┗  📁 ISSUE_TEMPLATE : contains issues templates
 ┃    ┗ 📜 *.yaml
 ┃ ┗  📁 workflows : contains CICD processes
 ┃    ┣ 📜 code_quality.yml : Ruff + Black + mypy
 ┃    ┗ 📜 tests.yml : pytest + CodeCov
 ┣ 📁 docs: contains the documentation.
 ┣ 📁 project_name: contains the project code.
 ┃ ┗ 📜 *.py
 ┣ 📁 test: contains the project tests.
 ┃ ┗ 📜 test_*.py
 ┣ 📜 .gitignore: lists the files/folders to ignore for git.
 ┣ 📜 pre-commit-config.yaml: configuration file for pre-commit.
 ┣ 📜 CITATION.cff: citation information.
 ┣ 📜 CODE_OF_CONDUCT.md: code of conduct.
 ┣ 📜 CONTRIBUTING.md: contributing guidelines.
 ┣ 📜 LICENSE: license file.
 ┣ 📜 pyproject.toml: project configuration file.
 ┣ 📜 README.md: markdown file containing the project's readme.
 ┣ 📜 readthedocs.yml: Settings for readthedocs.
 ```
