[README.md](https://github.com/user-attachments/files/33819269/README.md)
# Browning's Productions – website

My portfolio: who I am, what I work on, and how to follow or support my projects.
Built with **Jekyll** and hosted for free on **GitHub Pages**.

This file is the guide. It explains how the site works, how to put it online and how to change the content.
(It is not shown on the website itself.)

---

## 1. How it works

GitHub Pages runs a program called **Jekyll** every time you save a change. Jekyll takes your simple text
files, puts them into the page templates, and publishes the finished website. You never touch HTML to
update content: you edit text files, press **Commit changes**, and about a minute later the site is updated.

```
_config.yml          Site settings (title, address). Rarely changed.
_data/
  profile.yml        ← YOU: name, email, links, about text, skills, experience, CV
  i18n.yml           Fixed words in English and Norwegian (menu, buttons, status names)
_projects/           ← ONE FILE PER PROJECT (becomes a project page + a card on the homepage)
  forest.md  solar.md  workshop.md  caferacer.md  server.md  product.md  climbing.md
  _TEMPLATE.md       Copy this to add a new project
_log/                ← ONE FILE PER PROGRESS UPDATE (shows on the project page and in "Latest updates")
  2026-10-22-solar-start.md  …
  _TEMPLATE.md       Copy this to add a new update
assets/
  img/               ← PUT YOUR PHOTOS HERE
  css/style.css      Colours, fonts, layout and animations
  js/site.js         Language flags, Dark/Light switch, menu
_layouts/, _includes/, index.html   The page templates (you don't need to edit these)
```

**Two languages.** Almost every piece of text has an English and a Norwegian version, written like this:

```yaml
title: { en: "Solar power", nb: "Solkraft" }
```

The flags in the top bar switch between them. `en` is English and `nb` is Norwegian (Bokmål). If you leave out `nb:`, the English text is shown for both.

> Always use `nb:`, never `no:`: GitHub's Jekyll reads a bare `no` as the word *false*.

**Placeholders.** Anything in `[square brackets]` is a placeholder for you to replace. Photos that aren't set yet
show as striped boxes with a label saying what photo should go there.

---

## 2. Put it online (first time, about 10 minutes)

### Step 1 – Create a GitHub account
Go to <https://github.com> and sign up (free). Pick your username carefully: your site address will be
`https://USERNAME.github.io`.

### Step 2 – Create the repository
1. Click **+** (top right) → **New repository**.
2. **Repository name:** type exactly `USERNAME.github.io` (with your own username).
   This gives you the shortest address. Any other name also works; see the note at the end of this section.
3. Choose **Public**.
4. Leave the other boxes unticked and click **Create repository**.

### Step 3 – Upload the files
Use **Chrome, Edge or Firefox** for this step (they handle dragging whole folders).

1. Unzip `browningsproductions-site.zip` on your computer. You get a folder called `browningsproductions-site`.
2. On the new repository page, click the link **uploading an existing file**.
3. Open the `browningsproductions-site` folder, select **everything inside it**
   (Ctrl+A on Windows, Cmd+A on Mac) and drag it all into the browser window.
   > ⚠️ Drag what is **inside** the folder, not the folder itself. Otherwise everything ends up one level too
   > deep and the site won't work.
4. Wait until all files are listed, scroll down and click **Commit changes**.
5. **Check:** the repository's front page should now list `_config.yml`, `index.html`, `README.md` and the
   folders `_data`, `_projects`, `_log`, `assets` … directly, not inside another folder.
   (The hidden file `.gitignore` may not come along on a Mac. That's fine, it isn't needed.)

### Step 4 – Turn on GitHub Pages
1. In the repository, go to **Settings** → **Pages** (left menu).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
   (For a `USERNAME.github.io` repository this may already be set. Then just check it says main and / (root).)
4. Wait a few minutes. The very first time can take up to ~10 minutes. Refresh the page until a box
   appears: **"Your site is live at https://USERNAME.github.io"**. Click **Visit site**.

You can watch the progress under the **Actions** tab: a yellow dot means building, a green tick means done, a red
cross means something went wrong (see *Troubleshooting* below).

> **Repository with another name?** If you called it e.g. `portfolio`, the address becomes
> `https://USERNAME.github.io/portfolio/`. GitHub works this out automatically. Only if the site then shows up
> without colours or with broken links: open `_config.yml`, remove the `#` in front of `# baseurl: "/portfolio"`
> and put your repository name there.

---

## 3. Change the content

All editing can be done directly on github.com. Open a file, click the **pencil icon (Edit)**, change the
text, then click **Commit changes**. The site updates within a minute or two.

> **One rule:** these files are sensitive to spaces at the start of a line (indentation). Keep the same
> number of spaces as the line above, and keep the quotes `" "` around text.
> If text contains a `"`, write `\"` instead. Lines starting with `#` are just notes to you; the site ignores them.

### Your name, email, links and CV → `_data/profile.yml`
- `name:`: your name (replaces `[YOUR NAME]`).
- `email:`: your email. Turns on the email button in the contact section.
  Note that it will be public, so some spam is likely; a separate address for the site is a good idea.
- `links:`: paste full links to YouTube, Instagram, LinkedIn, GitHub. Empty ones are hidden automatically.
- `cv:`: open the `assets` folder → **Add file → Upload files** → upload your CV named `cv.pdf`,
  then write `cv: "/assets/cv.pdf"`. This turns on the **Download CV** button.
- `hero_photo:` / `about_photo:`: the big photo at the top, and the farm photo.
- `about:`, `skills:`, `timeline:`: the About text, skills tags and experience list.
  Skills written in `[brackets]` show as dashed "to fill in" tags.

### A project → `_projects/<name>.md`
Open e.g. `_projects/solar.md`. Every line is explained with a comment (`# …`). The most useful ones:

| Line | What it does |
|---|---|
| `status:` | `idea`, `started`, `building`, `ongoing`, `inspection`, `beginner` or `done` |
| `level:` | How full the orange status bar is: `1`–`4` |
| `hold: true` | Shows an **On hold** tag |
| `youtube: "https://…"` | Shows the **Watch on YouTube** button and the video box. Leave `""` to hide them |
| `summary:` | The short text on the homepage card |
| `lead:` | The intro under the title on the project page |
| `facts:` | The facts box (size, date, model…). Add or remove lines freely |
| `detail:` | The **About the project** sections. Add as many as you like |
| `needs:` | The orange **How you can help** box. Write `needs: []` to hide it |
| `photo:` | The big photo (see below) |

In the `detail:` texts you can use simple formatting: `**bold**`, `*italic*`, `[link text](https://…)`.

### Finish a project
In the project file set:
```yaml
status: done
finished: "12.05.2027"
```
It leaves the project cards and appears in the **Completed** list automatically.

### Add a progress update (log entry)
1. Open the `_log` folder → **Add file** → **Create new file**.
2. Name it `YYYY-MM-DD-short-name.md`, e.g. `2026-11-03-panels-up.md`.
3. Copy the contents of `_log/_TEMPLATE.md`, paste, fill in, **Commit changes**.

The update text goes under `en: |` and `nb: |`. Here you **don't** use quotes. Just write normal text on the
lines below, indented with 4 spaces like the example, with an empty line between paragraphs.

It appears on that project's page under **Progress log**. The three newest updates also show in
**Latest updates** on the homepage. `project:` must match the project's file name (`solar.md` → `solar`).

### Add a new project
Open `_projects/_TEMPLATE.md`, copy everything, then in the `_projects` folder choose **Add file → Create new file**,
name it e.g. `greenhouse.md` (lowercase, no spaces or æ/ø/å), paste and fill it in. Set `order:` (its place in
the lists) and `group:` (which section it appears under).
It gets its own page at `/projects/greenhouse/`, a card on the homepage and an entry in the Projects menu.

### Add photos
1. Make the photo smaller first: about **1600–2000 px wide**, saved as **.jpg** (under ~500 KB).
   Use simple names without spaces or æ/ø/å: `solar-roof.jpg`.
2. Open the `assets/img` folder on GitHub → **Add file** → **Upload files** → drag the photo in → **Commit changes**.
3. Point to it from a project or log file: `photo: "/assets/img/solar-roof.jpg"`.

### Colours
Open `assets/css/style.css`. The two blocks at the very top hold all the colours: the dark theme first, then the
light "Fjord & copper" theme. Change a colour code there and it changes across the whole site.

---

## 4. Troubleshooting

**The site didn't update / the Actions tab shows a red cross.**
Click the red cross → the failed step → read the error. It almost always names the file and line.
The usual causes are:
- a missing or extra space at the start of a line,
- a missing closing quote `"`,
- a `"` inside text (write `\"` instead), or
- a `:` followed by a space inside text that isn't in quotes (wrap the text in quotes).

Fix the line, commit again.

**A photo doesn't show.** Check the file name matches exactly, including capital letters (`Solar.JPG` ≠ `solar.jpg`),
and that the path is `/assets/img/your-file.jpg`.

**I see an old version.** Wait two minutes and reload with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac).

---

## 5. Later: your own domain

Buy a domain (e.g. `browningsproductions.no` from a Norwegian registrar). Then in the repository go to
**Settings → Pages → Custom domain**, type the domain, and follow GitHub's instructions for the DNS settings at
your registrar. Tick **Enforce HTTPS** when it becomes available.
