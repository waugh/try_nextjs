## Genesis

### Reminders

When cloning, remember (modify as appropriate):
```
git config user.email m2hh2kmhsn@snkmail.com
git config user.name "Jack WAUGH"
npm install
```
To start the "development"-mode server:
```
npm run dev
```

### Genesis

This procedure begins from the viewpoint of the directory above that to
contain the project. The directory to contain the project is called
`try_nextjs` and I have moved or removed everything from it except `.git`,
preparatory to starting over.

This project is to be based on nextjs.org. But we want support for Typescript.
To get that requires giving an extra argument to the command to create the
project. So the instructions come from page
[https://nextjs.org/docs/basic-features/typescript](https://nextjs.org/docs/basic-features/typescript).
```
npx create-next-app@latest --ts
```
Output:
```
Need to install the following packages:
  create-next-app@latest
Ok to proceed? (y) 
✔ What is your project named? … try_nextjs
Creating a new Next.js app in /home/jack/projects/try_nextjs.

Using npm.

Installing dependencies:
- react
- react-dom
- next


added 291 packages, and audited 292 packages in 18s

51 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Installing devDependencies:
- eslint
- eslint-config-next
- typescript
- @types/react
- @types/node


added 177 packages, and audited 469 packages in 11s

83 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Success! Created try_nextjs at /home/jack/projects/try_nextjs
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd try_nextjs
  npm run dev
```
Actually doing:
```
cd try_nextjs
ls -a
```
Output:
```
.               .git            next-env.d.ts  package-lock.json  README.md
..              .gitignore      node_modules   pages              styles
.eslintrc.json  next.config.js  package.json   public             tsconfig.json
```
The presence of .git is encouraging.
```
git status
```
Output is consistent with expectations.
```
git add --all
git commit -m 'Restarting based on `npx create-next-app@latest --ts`.'
```
Output:
```
[wjw_003 adc8cd5] Restarting based on `npx create-next-app@latest --ts`.
 18 files changed, 458 insertions(+), 760 deletions(-)
 rewrite .gitignore (86%)
 delete mode 100644 .tool-versions
 delete mode 100644 LICENSE
 rewrite README.md (96%)
 delete mode 100644 doc/genesis.md
 delete mode 100644 doc/history.md
 create mode 100644 next.config.js
 create mode 100644 pages/_app.tsx
 create mode 100644 pages/api/hello.ts
 delete mode 100644 pages/index.js
 create mode 100644 pages/index.tsx
 delete mode 100644 pages/posts/first-post.tsx
 rewrite public/favicon.ico (74%)
 create mode 100644 styles/Home.module.css
 create mode 100644 styles/globals.css
```
Now I
```
git push
```
Pinning down that commit by parts of its hash:
```
   fb6a902..adc8cd5  wjw_003 -> wjw_003
```
Then to remember what I saved that may need restoring
```
ls -a ../save
```
Says:
```
.  ..  doc  .gitignore  LICENSE  README.md  .tool-versions
```
Going to intersperse commands and output.
```
ls doc  .gitignore  LICENSE  README.md  .tool-versions
ls: cannot access 'doc': No such file or directory
ls: cannot access 'LICENSE': No such file or directory
ls: cannot access '.tool-versions': No such file or directory
.gitignore  README.md
for f in doc LICENSE .tool-versions
do
  mv ../save/$f .
done
```
Manually integreated the README.md versions.
Manually integrating the .gitignore versions.
```
ls -la ../save
```
There are two files and their lengths are zero.
```
rm -rf ../save
git status
On branch wjw_003
Your branch is up to date with 'origin/wjw_003'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .gitignore
	modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.tool-versions
	LICENSE
	doc/
git add --all
git commit -m "Restore .gitignore, .tool-versions, LICENSE, and dox."
git push
   adc8cd5..e7c5fbb  wjw_003 -> wjw_003
```
The server works and some of the source is in Typescript.
However, introducing a type error does not result in a diagnostic
when the server recompiles.
Following
[this advice](https://www.reddit.com/r/typescript/comments/rhwsq6/nextjs_check_for_type_errors/hotfhz6/),
which says to follow
[this other advice](https://nextjs.org/docs/basic-features/eslint).

Found that types can be checked with `tsc`, but neither `lint` nor the
server alerts me to my error of static typing.

Trying
[these]()
instructions.
```
npm install --save-dev typescript @typescript-eslint/parser
npm install --save-dev @typescript-eslint/eslint-plugin
```
Editing `.eslintrc.json` per the instructions.

It still doesn't catch my type-related error in `npm run lint`.

Moving on. At least, I know I can run `tsc` with the appropriate args to
check types.
```
npx tsc --noEmit
```

