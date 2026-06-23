# Your guide to editing the Freedom School website with Claude Code

This guide walks you through getting Claude Code set up on your Mac so you can make changes to the website yourself — rewriting copy, updating pricing, adding blog posts, tweaking colours, whatever you need — simply by describing what you want in plain English.

---

## What is Claude Code?

Claude Code is an AI coding assistant that lives in a small app on your computer. You open your project, type what you want changed, and Claude edits the files for you. You don't need to know how to code. When you're happy, one command pushes the changes live — Netlify rebuilds the site automatically within a couple of minutes.

---

## What you need before you start

1. **A Claude account with Claude Code access** — go to [claude.ai](https://claude.ai) and sign up (or log in). Claude Code requires a **Pro** plan or higher. Once you have Pro, download the Claude Code desktop app from [claude.ai/code](https://claude.ai/code) for Mac.

2. **Node.js** — the behind-the-scenes engine that runs the website locally so you can preview changes before publishing. Download the **LTS** version from [nodejs.org](https://nodejs.org) and follow the installer. (Just click Next/Continue through everything.)

3. **Git** — the tool that saves your changes and sends them to the live site. Download it from [git-scm.com](https://git-scm.com/download/mac) — or, if you're on a modern Mac, open the **Terminal** app and run:
   ```
   git --version
   ```
   If it prompts you to install developer tools, click **Install**. That's the easiest route.

4. **Access to the GitHub repository** — ask Robbie to add your GitHub account as a collaborator on `freedomschoolglobal/MainWebsite`. You'll get an email invitation from GitHub — accept it.

---

## One-time setup

### 1. Copy the project to your computer

Open **Terminal** (search for it in Spotlight — ⌘ Space, type "Terminal").

Pick a folder where you want to keep the website. Your Desktop is fine for now:

```bash
cd ~/Desktop
git clone https://github.com/freedomschoolglobal/MainWebsite.git "Freedom School"
```

This creates a folder called `Freedom School` on your Desktop with all the website files.

### 2. Install the project's dependencies

Still in Terminal:

```bash
cd ~/Desktop/Freedom\ School
npm install
```

This downloads all the code packages the site needs. It only takes a minute and you only need to do it once.

### 3. Sign in to Claude Code

Open the **Claude Code** desktop app. It will ask you to sign in with your Anthropic/Claude account — the same one you use on claude.ai.

---

## Your everyday workflow

### Opening the project in Claude Code

1. Open the Claude Code desktop app.
2. Click **Open project** (or **File → Open folder**) and select the `Freedom School` folder on your Desktop.
3. Claude Code will open with the project loaded and ready.

### Making changes

Just type what you want in the chat box at the bottom. Be as specific or as vague as you like — Claude will ask if it needs more detail. Some examples:

> *"Can you update the pricing on the homepage to £1,200 per term, with a 10% sibling discount?"*

> *"The FAQ on the curriculum page needs a new question: 'Do students get a diploma?' The answer is yes, internationally recognised."*

> *"Please update my bio on the Our Team page — here's the new version: [paste text]"*

> *"Add a new journal post titled 'Why we teach philosophy to teenagers'. Here's the text: [paste text]"*

> *"Change the hero headline to 'Education that lights you up'"*

> *"Make the primary button colour a slightly deeper shade of coral"*

Claude will show you exactly what it's changed and ask you to confirm before doing anything drastic.

### Previewing your changes locally

Before pushing anything live, you can preview changes on your own computer. In Claude Code's terminal panel (or in your Terminal app), run:

```bash
npm run dev
```

Then open **http://localhost:4321** in your browser. This is a live preview — every save updates it instantly.

### Publishing your changes (going live)

When you're happy, ask Claude:

> *"Please commit and push my changes to GitHub"*

Claude will:
1. Package up all your changes with a description of what was done
2. Push them to GitHub

Within 1–2 minutes, **Netlify automatically rebuilds and deploys** the site. You'll see the changes live at the real URL.

---

## Where the content lives

When you ask Claude to update something, it's helpful to know which files hold what — you don't need to edit them directly, but knowing the structure helps you give better instructions.

| Content | File |
|---|---|
| Site name, navigation links, footer, contact email | `src/data/site.ts` |
| Homepage copy, About copy, pricing, FAQs, founder note | `src/data/content.ts` |
| The 5 learning areas and all 13 courses | `src/data/curriculum.ts` |
| Team members (bios, photos, roles) | `src/data/team.ts` |
| Blog / Journal posts | `src/content/journal/` — one `.md` file per post |
| Colours, fonts, spacing | `src/styles/global.css` |
| The hero animation | `src/lib/heroScene.ts` |

---

## Things to be careful about

- **Don't touch `.env`** — this file holds the Cal.com booking key. Claude knows not to touch it either, but just leave it alone.
- **Don't use drag-and-drop deployment in Netlify** — always push via Git (ask Claude to do it). The booking system won't work if you deploy any other way.
- **Don't force-push or delete branches** — just push normally. If Claude ever suggests something that sounds destructive, ask it to explain first.
- **Images** — if you're adding new photos, drop them into `src/assets/photos/` and tell Claude which file you added. Astro will optimise them automatically at build time.

---

## If something goes wrong

- **The site looks broken after a push** — check the Netlify dashboard (ask Robbie for access). Under *Deploys*, you'll see a log of the build. Any red error will tell you what went wrong.
- **Claude seems confused or does something unexpected** — type `/clear` in Claude Code to start a fresh conversation, then try again with a more specific description.
- **You want to undo a change** — ask Claude: *"Can you revert the last change I made?"* Git keeps a full history, so nothing is ever permanently lost.

---

## Quick-start cheat sheet

| Task | What to say to Claude |
|---|---|
| Update copy anywhere | *"Update the [section] on [page] to say: [new text]"* |
| Add a FAQ | *"Add a new FAQ: Q: [question] A: [answer]"* |
| Add a blog post | *"Create a new journal post: title '[title]', tag '[tag]', here's the text: [paste]"* |
| Change a colour | *"Make the [element] colour [description]"* |
| Preview locally | `npm run dev` in Terminal → open localhost:4321 |
| Publish changes | *"Commit and push my changes to GitHub"* |

---

If you get stuck at any point, drop Robbie a message and he can jump in remotely. The whole project is in Git so nothing can go permanently wrong.
