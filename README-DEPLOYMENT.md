# Deployment & PR previews

The live site is built by GitHub Pages directly from the `master` branch (no
workflow involved). Direct pushes to `master` are blocked for everyone except
repository admins (ruleset "master: PRs only"), so changes arrive as pull
requests.

[.github/workflows/pr-preview.yml](.github/workflows/pr-preview.yml) builds
every pull request with Jekyll. For pull requests opened from a branch of this
repository (not a fork), it deploys the built site to
[Cloudflare Pages](https://pages.cloudflare.com/) as a per-PR preview and posts
(or updates) a comment on the PR with the link, e.g.
`https://pr-<PR number>.restud-data-editor.pages.dev`, rebuilt on every push.

Forked PRs are built but never deployed, since forks don't have access to
repository secrets. Contributors should push a branch to this repository
instead of forking.

Until the setup below is done, the deploy step fails on PRs; the live site is
unaffected.

## One-time Cloudflare Pages setup

You need a (free) Cloudflare account. No domain needs to be on Cloudflare;
previews are served from `*.pages.dev`.

1. **Create a Cloudflare API token.** In the Cloudflare dashboard:
   **My Profile → API Tokens → Create Token**, custom token with
   `Account → Cloudflare Pages: Edit`, limited to your account. Copy the
   value (shown only once). Don't use the Global API Key.

2. **Find your Cloudflare Account ID** in the right-hand sidebar of the
   **Workers & Pages** overview, or via `npx wrangler whoami`.

3. **Set both as GitHub Actions secrets on this repo:**

   ```bash
   gh secret set CLOUDFLARE_API_TOKEN --repo REStud/data-editor
   gh secret set CLOUDFLARE_ACCOUNT_ID --repo REStud/data-editor
   ```

4. **Create the Cloudflare Pages project** `restud-data-editor` (the
   deploy does not create it on its own):

   ```bash
   npx wrangler login
   npx wrangler pages project create restud-data-editor --production-branch master
   ```

   Or in the dashboard: **Workers & Pages → Create → Pages → Upload assets**.
   It is a Direct Upload project: do **not** connect it to the Git
   repository. GitHub Actions builds the site; Cloudflare only hosts it.

   Project names are unique across Cloudflare. If `restud-data-editor` is
   taken, pick another name and change `CF_PAGES_PROJECT` in the workflow.

5. **Verify:** `gh secret list --repo REStud/data-editor` should list both
   secrets.

## Building locally

The macOS system Ruby (2.6) is too old. Install Ruby 3.3, e.g.
`brew install ruby@3.3`, and put it first on `PATH`
(`/usr/local/opt/ruby@3.3/bin`, or `/opt/homebrew/opt/ruby@3.3/bin` on
Apple Silicon). Then:

```bash
bundle install
PAGES_REPO_NWO=REStud/data-editor bundle exec jekyll serve
```

To preview someone's PR locally: `gh pr checkout <number>` first.

## Notes

- **Access**: `pages.dev` previews are public by default. To restrict them,
  add an access policy under **Workers & Pages → restud-data-editor →
  Settings**.
- **Cleanup**: each PR leaves a deployment (alias `pr-<number>`) in
  Cloudflare. They are harmless and can be deleted under the project's
  **Deployments** tab.
- **Troubleshooting**: `Project not found` means the project name differs
  from `CF_PAGES_PROJECT` or lives in another account; `Authentication error`
  means a wrong account ID or a token lacking *Cloudflare Pages: Edit*.
