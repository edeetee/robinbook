# Robinbook
For more information, go to [the robinbook homepage](http://edeetee.github.com/robinbook).

This repository holds the files for the robinbook extension as well as the homepage.

The scripts for building can be found in the package.json of each directory, as per nodejs standards. I have paid care to make sure the code outputs aren't obfuscated, which seems to be the norm for webpack for speed increases, but is important in this use case so that users can personally verify code. On top of that, the developer tools used all support hot reloading, to make change happen automatically inside the browser and allow for a responsive developer environment.

---

## Extension
This directory holds the source for the robinbook extension.

The javascript source can be found in the _app_ subdirectory. I use content scripts to modify existing pages (downloading friends, displaying ontop of existing content) and browser actions to act as a wizard of sorts. Viewing app/manifest.json may give you a better idea of what code is used where.

### Tools
* javascript
* Visual Studio Code
* [WebExtension](https://developer.mozilla.org/Add-ons/WebExtensions)
* [webpack](https://www.npmjs.com/package/webpack)
* jQuery
* [webextension-toolbox](https://www.npmjs.com/package/webextension-toolbox)
* Mozilla Addons for hosting (skipped google chrome as it costs money to upload extension!!!)

## Site
This directory holds the source for the robinbook site.

The source can be found in the _pages_ subdirectory. I opted for using next.js, basically a wrapper around React. I wanted to give react a good go, but should have just opted for a webpack js build now that I've gone through it. React has a lot of MVP niceties that are wasted on simple sites, making things harder when they could be done quicker when you know the html/css already. It was a good exercise though.

The build code is submitted to github pages by pushing to the gh-pages branch using the out directory as the root.

### Tools
* js, vscode (as above)
* [next.js](https://www.npmjs.com/package/next)
* github pages for hosting