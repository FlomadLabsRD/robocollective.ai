# robocollective.ai (Rebuild)

This repo reimagines the landing page by blending the reference aesthetic with the requested palette and wiring the copy to a Strapi single type.

## Run locally

1. `python -m venv venv` (optional isolation)
2. `venv\\Scripts\\activate` (Windows) or `source venv/bin/activate`
3. `pip install -r requirements.txt`
4. `python server.py`
5. Open `http://127.0.0.1:5000` in a browser (the same backend/rewrite is served through Flask).

## Strapi CMS

Content lives in the `Landing` single type described in `STRAPI.md`. Run Strapi (`npm run develop`) in a sibling folder, grant the Public role `find`/`findOne` permissions, and keep it running so `scripts.js` can fetch `http://localhost:1337/api/landing?populate=deep` (override `window.STRAPI_URL` in `index.html` when pointing to another host).
