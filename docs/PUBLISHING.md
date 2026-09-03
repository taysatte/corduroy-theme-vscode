# Publishing Corduroy Theme

One package ships to both registries. Extension id is `taysatte.corduroy-theme`.

## One-time setup

### Visual Studio Marketplace

1. Create (or claim) the publisher id **`taysatte`** in the [Visual Studio Marketplace publisher management](https://marketplace.visualstudio.com/manage) UI
2. Create a Personal Access Token with Marketplace publish scope (see [VS Code docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token))
3. Add repo secret `VSCE_PAT`

### Open VSX

1. Sign in at [open-vsx.org](https://open-vsx.org/) with GitHub
2. Create a namespace matching the publisher: `ovsx create-namespace taysatte`
3. Create an access token at [user settings](https://open-vsx.org/user-settings/tokens)
4. Add repo secret `OVSX_PAT`

## Local publish

```bash
pnpm run build:themes
pnpm exec vsce package
pnpm exec vsce publish --packagePath *.vsix   # Marketplace
pnpm exec ovsx publish *.vsix                 # Open VSX
```

## CI

The [Publish workflow](.github/workflows/publish.yml) runs on GitHub Release publish (or manual dispatch). It packages once and publishes to both registries when the corresponding secrets are present.
