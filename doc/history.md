## History

This history file includes false starts, struggles, thinking, etc. The
distilled and important parts of the history are in `genesis.md`.

Before starting this project, I had tried in another repo, starting from
scratch rather than from something like Next.js (a "framework"?), and failed.
Had installed only `typescript` and `react-dom` NPM packages.
Did not get it to do a simple thing.

Received reasonable-sounding advice over Reddit to the effect that my
life would be a lot easier both short-term and long-term if I were to
start with Next.js. So that is my approach here.

Created the repo on Bitbucket with a .gitignore, language set to Typescript.
I had thought they offered a choice of licences to include, but I guess
Bitbucket does not do that (Github does, or did, back when Github was
working).

```
git clone git@bitbucket.org:jack_waugh/try_nextjs.git
cd try_nextjs
git config user.email m2hh2kmhsn@snkmail.com
git config user.name "Jack WAUGH"
```
Putting in a licence before I forget. I haven't studied licenses in depth
or consulted a lawyer. A colleague used to put in the MIT license, and I
took a bit of a look at it and it seems OK.

Added to .gitignore, every hint from some other sources. So now .gitignore is
probably fairly comprehensive.

I install node.js using `asdf`. So setting up .tool-versions for
`nodejs 16.13.0`.
```
node --version
node
3 + 4
```
Yay! Node works.

Going to follow the instructions in
https://nextjs.org/learn/basics/create-nextjs-app/setup .
But those involve running a setup script that does who-knows-what, so
going to commit and push first!

```
npx create-next-app nextjs-blog --use-npm --example \
  "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```
It created the example in a subdirectory. Tried it in there and what I
tried seemed to work. Integrated everything up here. Tried to run it again
and this came out:
```
It looks like you're trying to use TypeScript but do not have the required package(s) installed.

Please install typescript and @types/react by running:

	npm install --save-dev typescript @types/react

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).

```
There was no tsconfig.json file when I tried that.
```
find . -name tsconfig.json -print
```
There is a file whose name ends in a suffix indicating Typescript. I had
changed it while running the development server, and it had seemed to work.
Let's try changing it back.
```
cd $repo/pages/posts
mv first-post.tsx first-post.js
cd $repo
npm run dev # as instructed by the tutorial from nextjs.org
```
Server seems to work fine. So now I need the legit way to include
Typescript.


