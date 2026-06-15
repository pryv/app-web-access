# Pryv app-web-access

Web app to generate a pryv [app access](http://api.pryv.com/concepts/#accesses) token

## Usage

Pass a register name in the query parameter: `http://pryv.github.io/app-web-access/?pryvServiceInfoUrl={Url to service ino}` as per the [Autoconfiguration guidelines](https://api.pryv.com/guides/app-guidelines/)

Example: [http://pryv.github.io/app-web-access/?pryvServiceInfoUrl=https://reg.pryv.me/service/info](http://pryv.github.io/app-web-access/?pryvServiceInfoUrl=https://reg.pryv.me/service/info)

## Contribute

*Prerequisites:* __node__ & __npm__

* Download dependencies with `npm install`.
* Generate web app into `dist/` with `npm run build` (esbuild; `npm run watch` to rebuild on change).
* Run the npm server with `npm run webserver`.
* Open https://l.rec.la:4444/
* Publish to GitHub Pages with `npm run gh-pages`.

## License

[MIT](https://github.com/pryv/app-web-access/blob/master/LICENSE)
