# Contributing Guide

This document records how the two team members worked together on the **To-Do List and Task Management System**: who did what, which branches were used, and how pull requests and code reviews were handled.

## Individual Contributions

### Bhabya Kumar Lal | Roll No: 22 ([@BhabyaKumar](https://github.com/BhabyaKumar)), Student 1

- Created the repository, added `.gitignore` and invited the partner as a collaborator.
- Built the core features: **add**, **complete** and **delete** tasks.
- Added the **theme** feature and the **due date** feature.
- UI styling improvements (`Making it look cool.`).
- Reviewed and merged PR #1 (search feature).

| Commit    | Message                                  |
| --------- | ---------------------------------------- |
| `26c5c73` | first commit                             |
| `3f95dd6` | included features: add, complete, delete |
| `0b15414` | theme Feature added                      |
| `1763832` | added Due Date Feature in Feature branch |
| `003db33` | Making it look cool.                     |

### Nandani Gupta | Roll No: 40 ([@Nandini-Gupta3101](https://github.com/Nandini-Gupta3101)), Student 2

- Accepted the collaborator invitation and cloned the repository.
- Built the **search** feature and the **filter** feature.
- Proposed the colourful style update (PR #4).
- Reviewed and merged PR #2 (due date feature).

| Commit    | Message                 |
| --------- | ----------------------- |
| `08a4ba7` | Added filter.css        |
| `9f0b3ed` | Added filter.js         |
| `a80a695` | Added search.css        |
| `767f8f9` | Feature Search complete |
| `1b2fd05` | pull request test       |
| `b4bf0c1` | test2                   |

## Screenshots

!(screenshots/ss1.png)
!(screenshots/ss2.png)
!(screenshots/ss3.png)
!(screenshots/ss4.png)

## Branches

| Branch               | Owner   | Purpose                | Status                                                |
| -------------------- | ------- | ---------------------- | ----------------------------------------------------- |
| `main`               | Both    | Stable, merged code    | Default                                               |
| `feature-search`     | Nandini | Search feature         | Merged via PR #1                                      |
| `feature-dueDate`    | Bhabya  | Due date feature       | Merged via PR #2                                      |
| `feature-drakKnight` | Bhabya  | Dark theme and styling | Merged via PR #3                                      |
| `feature-Colourfull` | Nandini | Colourful style update | [Merged or open, update after resolving the conflict] |

## Pull Requests

| PR                                                       | Branch               | Opened by | Merged by |
| -------------------------------------------------------- | -------------------- | --------- | --------- |
| [#1](https://github.com/BhabyaKumar/todo-project/pull/1) | `feature-search`     | Nandini   | Bhabya    |
| [#2](https://github.com/BhabyaKumar/todo-project/pull/2) | `feature-dueDate`    | Bhabya    | Nandini   |
| [#3](https://github.com/BhabyaKumar/todo-project/pull/3) | `feature-drakKnight` | Bhabya    | Bhabya    |
| [#4](https://github.com/BhabyaKumar/todo-project/pull/4) | `feature-Colourfull` | Nandini   | [update]  |

**Pull request process**

1. Push the feature branch to GitHub.
2. Open a PR into `main` with a clear title and description.
3. The partner reviews the changes.
4. Fix any review comments, then merge.

## Merge Conflict Resolution

A conflict occurred in PR #4 (`feature-Colourfull`) because both members changed the same part of the styling.

Which is resolved later.
