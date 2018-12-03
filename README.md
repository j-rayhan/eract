This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#### Get Started

1. You first need to fork the repo(https://github.com/johir-rayhan/eract).
2. Clone your own private repo

   ```
   $ git clone git@github.com:<username>/eract.git
   ```

3. Add remote upstream
   ```
   $ git remote add upstream git@github.com:johir-rayhan/eract.git
   ```

#### Creating a PR

> DON'T USE `git pull` command for updating other changes, you can use `git fetch` and `git rebase` to update changes from `upstream`

1. Fetch the upstream

   ```
   $ git fetch upstream
   ```

2. Rebase to _`upstream/dev`_ to update changes from others

   ```
   $ git rebase upstream/dev
   ```

   _If you have conflict , you have to resolve each conflict on each commit , do it manually or add `kdiff3` / `Beyond Compare` or anything that fit you , add these modification and do `$ git rebase --continue` until you cleared the conflicts._

3. Do your work, _make commits_, you should create directly a PR and _push your work frequently_.

4. Test your code.

5. You can now push your code.

- If the branch is new you just run `$ git push origin myNewBranch`
- If you had rebase you need to force the `$ git push origin myNewBranch -f`

6. Create the PR from new commits of `origin` into `upstream/dev`.

**More you rebase your branch often, less you get problems. So don't wait ! You should rebase each time a commit is added to the upstream/dev.**

**DISCLAIMER** : Use _`push -f`_ only with **Fork and PR project** like here, never on a project were everyone is working on the **same remote**. Your rewrite commits history.

> DON'T MERGE yourself PR, it should be accomplished by Project Manager or Git Manager after review.

**Do _`Squash and merge`_ so that `upstream`'s commits history is not messy.**

### Run app

```
$ yarn
$ yarn start
```

### Server URLs

- Develop server: https://eract-api.herokuapp.com/reshare_public
- Production server: https://.......

### Help links:

- Link to a process diagrams:
- Link to a process diagram:
- User Stories
- Schema Spreadsheet:

## Github Workflow

This project uses the git forking workflow, https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow

Write commit messages "in the imperative mood". Read this if you haven't already: http://chris.beams.io/posts/git-commit/

Each commit should do one thing. It's no problem making lots of small commits, it's actualy much better than infrequent large commit because they are easier to review.

We use the Pull Request system of github.

`dev` branch is just our `master` branch.

```

```
