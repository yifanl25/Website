# Yifan Lin — Portfolio

Static portfolio pages for GitHub Pages. No build step or package install is required.

## Publish with GitHub Pages

In the repository settings, set **Pages → Build and deployment → Source** to **Deploy from a branch**, then select `main` and `/(root)`. GitHub Pages will publish the static files directly from the branch. The `CNAME` file keeps `www.yifanlin.me` as the intended site domain; GitHub Pages also needs that domain configured in repository settings and DNS pointed to GitHub Pages before the domain serves this copy.

The site uses relative links, so it works at both a custom domain and a repository URL such as `https://yifanl25.github.io/Website/`.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
