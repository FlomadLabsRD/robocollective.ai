const heroDynamic = document.querySelector(".hero-dynamic");
const heroPrefix = document.querySelector("[data-hero-heading-prefix]");
const heroSuffix = document.querySelector("[data-hero-heading-suffix]");
const heroLede = document.querySelector("[data-hero-lede]");
const heroMetaContainer = document.querySelector("[data-hero-meta]");
const serviceCards = document.querySelectorAll("[data-service-card]");
const processSteps = document.querySelectorAll("[data-process-step]");
const metricCards = document.querySelectorAll("[data-metric]");
const caseCards = document.querySelectorAll("[data-case-card]");
const ctaHeading = document.querySelector("[data-cta-heading]");
const ctaBody = document.querySelector("[data-cta-body]");
const ctaPrimaryAction = document.querySelector("[data-cta-action-primary]");
const ctaSecondaryAction = document.querySelector("[data-cta-action-secondary]");

const defaultLandingData = {
  hero: {
    headingPrefix: "Exclusive Brands & Models",
    headingSuffix: "Explore Our Most Advanced Robots at RoboCollective.ai",
    lede:
      "Buy robots for sale from trusted makers worldwide – delivered, professionally set up, and fully supported wherever you are. Explore industrial, service, and educational robots all in one place at RoboCollective.ai",
  },
  services: [
    {
      title: "Intelligent automation",
      description:
        "Design, launch, and monitor AI agents that augment your existing platforms without compromising compliance.",
    },
    {
      title: "Data storytelling",
      description:
        "Translate complex signals into narratives that keep product, marketing, and ops aligned on next steps.",
    },
    {
      title: "Operational UX",
      description:
        "Architect human-centered dashboards, notifications, and playbooks for faster alignment during critical launches.",
    },
  ],
  process: [
    {
      title: "Buy",
      description:
        "Buy cutting-edge robots, from industrial arms to service and educational platforms, with expert support from selection to deployment.",
    },
    {
      title: "Rent",
      description:
        "Rent the robots you need for pilots, events or seasonal peaks, and scale your automation without long-term commitments.",
    },
    {
      title: "Resell",
      description:
        "Resell your underused robots to trusted buyers, unlock capital and keep your fleet up to date.",
    },
  ],
  metrics: [
    { value: "3.2x", description: "More runbooks automated within three months" },
    { value: "94%", description: "Stakeholder confidence after first sprint" },
    { value: "48", description: "Dashboards kept in sync with live AI insights" },
  ],
  cases: [
    {
      title: "Launch intelligence for a new AI product",
      body: "United product/ops teams around shared North Stars, built predictive routing for feedback, and launched a self-service control tower.",
      highlight: false,
    },
    {
      title: "Automation for global research",
      body: "Scaled collaboration across continents by automating status capture, knowledge transfer, and insights distribution.",
      highlight: true,
    },
    {
      title: "Operations pulse for fintech teams",
      body: "Crafted a resilient operating system that respects controls while enabling creative sprints across product squads.",
      highlight: false,
    },
  ],
  cta: {
    heading: "RoboCollective.ai is your strategic partner in AI-driven operations.",
    body: "Share your most strategic ambition, and we'll co-create a roadmap that combines automation, intelligence, and creative rigor.",
    primaryLabel: "Plan a discovery call",
    primaryUrl: "contact.html",
    secondaryLabel: "Contact Us",
    secondaryUrl: "Form",
  },
};

let heroPhrases = [];
let heroPhraseIndex = 0;

const setHeroDynamicWords = (words = []) => {
  const filtered = Array.isArray(words) ? words.filter(Boolean) : [];
  if (!filtered.length) {
    return;
  }
  heroPhrases = filtered;
  heroPhraseIndex = 0;
  if (heroDynamic) {
    heroDynamic.textContent = heroPhrases[0];
  }
};

const rotateHeroPhrase = () => {
  if (!heroDynamic || !heroPhrases.length) {
    return;
  }
  heroPhraseIndex = (heroPhraseIndex + 1) % heroPhrases.length;
  heroDynamic.textContent = heroPhrases[heroPhraseIndex];
};

const buildHeroMetaMarkup = (entries = []) =>
  entries
    .map((entry, index) => {
      const divider =
        index < entries.length - 1 ? '<div class="hero-meta-divider"></div>' : "";
      return `<span>${entry}</span>${divider}`;
    })
    .join("");

const applyLandingData = (landing = defaultLandingData) => {
  const hero = landing.hero || defaultLandingData.hero;
  if (heroPrefix && hero.headingPrefix) {
    heroPrefix.textContent = hero.headingPrefix;
  }
  if (heroSuffix && hero.headingSuffix) {
    heroSuffix.textContent = hero.headingSuffix;
  }
  if (heroLede && hero.lede) {
    heroLede.textContent = hero.lede;
  }

  const metaEntries =
    hero.meta?.length > 0 ? hero.meta : defaultLandingData.hero.meta;
  if (heroMetaContainer) {
    heroMetaContainer.innerHTML = buildHeroMetaMarkup(metaEntries);
  }

  const dynamicWords =
    hero.dynamicWords?.length > 0
      ? hero.dynamicWords
      : defaultLandingData.hero.dynamicWords;
  setHeroDynamicWords(dynamicWords);

  const services = landing.services ?? defaultLandingData.services;
  serviceCards.forEach((card, index) => {
    const payload = services[index] ?? defaultLandingData.services[index];
    if (!payload) {
      return;
    }
    const title = card.querySelector("h3");
    const description = card.querySelector("p");
    if (title && payload.title) {
      title.textContent = payload.title;
    }
    if (description && payload.description) {
      description.textContent = payload.description;
    }
  });

  const processData = landing.process ?? defaultLandingData.process;
  processSteps.forEach((step, index) => {
    const payload = processData[index] ?? defaultLandingData.process[index];
    if (!payload) {
      return;
    }
    const heading = step.querySelector("h3");
    const description = step.querySelector("p");
    if (heading && payload.title) {
      heading.textContent = payload.title;
    }
    if (description && payload.description) {
      description.textContent = payload.description;
    }
  });

  const metrics = landing.metrics ?? defaultLandingData.metrics;
  metricCards.forEach((card, index) => {
    const payload = metrics[index] ?? defaultLandingData.metrics[index];
    if (!payload) {
      return;
    }
    const value = card.querySelector("strong");
    const description = card.querySelector("p");
    if (value && payload.value) {
      value.textContent = payload.value;
    }
    if (description && payload.description) {
      description.textContent = payload.description;
    }
  });

  const cases = landing.cases ?? defaultLandingData.cases;
  caseCards.forEach((card, index) => {
    const payload = cases[index] ?? defaultLandingData.cases[index];
    if (!payload) {
      return;
    }
    const heading = card.querySelector("h3");
    const description = card.querySelector("p");
    if (heading && payload.title) {
      heading.textContent = payload.title;
    }
    if (description && payload.body) {
      description.textContent = payload.body;
    }
    if (payload.highlight) {
      card.classList.add("case-card--glow");
    } else {
      card.classList.remove("case-card--glow");
    }
  });

  const cta = landing.cta ?? defaultLandingData.cta;
  if (ctaHeading && cta.heading) {
    ctaHeading.textContent = cta.heading;
  }
  if (ctaBody && cta.body) {
    ctaBody.textContent = cta.body;
  }
  if (ctaPrimaryAction) {
    if (cta.primaryLabel) {
      ctaPrimaryAction.textContent = cta.primaryLabel;
    }
    if (cta.primaryUrl) {
      ctaPrimaryAction.setAttribute("href", cta.primaryUrl);
    }
  }
  if (ctaSecondaryAction) {
    if (cta.secondaryLabel) {
      ctaSecondaryAction.textContent = cta.secondaryLabel;
    }
    if (cta.secondaryUrl) {
      ctaSecondaryAction.setAttribute("href", cta.secondaryUrl);
    }
  }
};

applyLandingData(defaultLandingData);
setInterval(rotateHeroPhrase, 2800);

const STRAPI_URL = (window.STRAPI_URL || "http://localhost:1337").replace(
  /\/$/,
  ""
);

const normalizeLandingAttributes = (attributes = {}) => ({
  hero: {
    headingPrefix: attributes.heroHeadingPrefix,
    headingSuffix: attributes.heroHeadingSuffix,
    lede: attributes.heroLede,
    dynamicWords: (attributes.heroDynamicWords || [])
      .map((item) => item.word || item.name)
      .filter(Boolean),
    meta: (attributes.heroMeta || [])
      .map((item) => item.text)
      .filter(Boolean),
  },
  services: (attributes.services || []).map((item) => ({
    title: item.title,
    description: item.description,
  })),
  process: (attributes.processSteps || []).map((item) => ({
    title: item.title,
    description: item.description,
  })),
  metrics: (attributes.metrics || []).map((item) => ({
    value: item.value,
    description: item.description,
  })),
  cases: (attributes.caseStudies || []).map((item) => ({
    title: item.title,
    body: item.summary || item.body,
    highlight: item.highlight,
  })),
  cta: {
    heading: attributes.ctaHeading,
    body: attributes.ctaBody,
    primaryLabel: attributes.ctaPrimaryLabel,
    primaryUrl: attributes.ctaPrimaryUrl,
    secondaryLabel: attributes.ctaSecondaryLabel,
    secondaryUrl: attributes.ctaSecondaryUrl,
  },
});

const fetchLandingData = async () => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/landing?populate=deep`);
    if (!response.ok) {
      throw new Error("Landing data request failed");
    }
    const payload = await response.json();
    const attributes = payload?.data?.attributes;
    if (!attributes) {
      console.warn("Strapi landing payload missing attributes", payload);
      return;
    }
    const normalized = normalizeLandingAttributes(attributes);
    applyLandingData(normalized);
  } catch (error) {
    console.warn("Unable to fetch landing page content from Strapi", error);
  }
};

fetchLandingData();

const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
const THEME_STORAGE_KEY = "robocollective-theme";
const assetSegments = window.location.pathname
  .split("/")
  .filter(Boolean);
const assetDepth = Math.max(0, assetSegments.length - 2);
const assetBase = "../".repeat(assetDepth);
const themeAssetDirectories = {
  dark: `${assetBase}assets/dark`,
  light: `${assetBase}assets/light`,
};
const themeAssetGroups = [
  {
    attribute: "src",
    datasetKey: "themeImg",
    elements: document.querySelectorAll("[data-theme-img]"),
  },
  {
    attribute: "src",
    datasetKey: "themeSrc",
    elements: document.querySelectorAll("[data-theme-src]"),
  },
];
const themeHrefElements = document.querySelectorAll("[data-theme-href]");
const heroVideoEl = document.querySelector(".hero-video__source");

const updateThemeToggleControls = (theme) => {
  const isLight = theme === "light";
  themeToggleButtons.forEach((button) => {
    button.dataset.theme = theme;
    button.setAttribute("aria-pressed", isLight ? "true" : "false");
    button.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
    const textEl = button.querySelector("[data-theme-toggle-text]");
    if (textEl) {
      textEl.textContent = isLight ? "Light" : "Dark";
    }
  });
};

const readStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

const getInitialTheme = () => {
  const stored = readStoredTheme();
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getThemeFile = (element, datasetKey, theme) => {
  const variantKey = `${datasetKey}${theme === "light" ? "Light" : "Dark"}`;
  return element.dataset[variantKey] || element.dataset[datasetKey];
};

const syncThemeMedia = (theme) => {
  const directory = themeAssetDirectories[theme] || themeAssetDirectories.dark;
  themeAssetGroups.forEach(({ attribute, datasetKey, elements }) => {
    elements.forEach((element) => {
      const file = getThemeFile(element, datasetKey, theme);
      if (!file) {
        return;
      }
      element.setAttribute(attribute, `${directory}/${file}`);
    });
  });
  themeHrefElements.forEach((link) => {
    const file = getThemeFile(link, "themeHref", theme);
    if (!file) {
      return;
    }
    link.setAttribute("href", `${directory}/${file}`);
  });
  if (heroVideoEl) {
    heroVideoEl.load();
  }
};

const applyColorTheme = (theme) => {
  const useLight = theme === "light";
  document.documentElement.classList.toggle("theme-light", useLight);
  updateThemeToggleControls(theme);
  syncThemeMedia(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures (e.g., private browsing)
  }
};

let activeTheme = getInitialTheme();
applyColorTheme(activeTheme);

if (themeToggleButtons.length) {
  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeTheme = activeTheme === "light" ? "dark" : "light";
      applyColorTheme(activeTheme);
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});

const COOKIE_CONSENT_STORAGE_KEY = "robocollective-cookie-consent";
const cookieConsentEl = document.querySelector("[data-cookie-consent]");
const cookieAcceptButton = document.querySelector("[data-cookie-accept]");

const readCookieConsent = () => {
  try {
    return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
};

const persistCookieConsent = () => {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "accepted");
  } catch {
    // ignore when storage is unavailable
  }
};

const hideCookieConsent = () => {
  if (cookieConsentEl) {
    cookieConsentEl.hidden = true;
    cookieConsentEl.setAttribute("aria-hidden", "true");
    cookieConsentEl.style.display = "none";
  }
};

  if (cookieConsentEl && cookieAcceptButton) {
    const consentStatus = readCookieConsent();
    if (consentStatus === "accepted") {
      hideCookieConsent();
    } else {
      cookieConsentEl.hidden = false;
      cookieConsentEl.setAttribute("aria-hidden", "false");
      cookieConsentEl.style.display = "";
    }

    cookieAcceptButton.addEventListener("click", () => {
      persistCookieConsent();
      hideCookieConsent();
    });
  }

const productDetail = document.querySelector(".product-detail");

if (productDetail) {
  const productName =
    productDetail.querySelector(".product-detail__info h1")?.textContent?.trim() ||
    "Product";

  const fabContainer = document.createElement("div");
  fabContainer.className = "product-fab";
  fabContainer.innerHTML = `<button type="button" data-product-fab>Request info</button>`;
  document.body.appendChild(fabContainer);

  const modal = document.createElement("div");
  modal.className = "product-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="product-modal__backdrop" data-product-modal-close></div>
    <div class="product-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <button class="product-modal__close" type="button" data-product-modal-close aria-label="Close form">×</button>
      <h3 id="product-modal-title">Request info</h3>
      <p class="product-form__note">Product: ${productName}</p>
      <form class="product-form" data-product-form>
        <input type="hidden" name="product" value="${productName}">
        <label>
          Name
          <input name="name" type="text" required autocomplete="name" placeholder="Your name">
        </label>
        <label>
          Email
          <input name="email" type="email" required autocomplete="email" placeholder="you@example.com">
        </label>
        <label>
          Phone (optional)
          <input name="phone" type="tel" autocomplete="tel" placeholder="+1 555 123 4567">
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Tell us about your use case"></textarea>
        </label>
        <div class="product-form__actions">
          <button class="button button--secondary" type="button" data-product-modal-close>Cancel</button>
          <button class="button button--primary" type="submit">Send request</button>
        </div>
        <p class="product-form__note" data-product-confirmation hidden>Thanks! We’ll reach out about ${productName}.</p>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const fabButton = fabContainer.querySelector("[data-product-fab]");
  const formEl = modal.querySelector("[data-product-form]");
  const confirmationEl = modal.querySelector("[data-product-confirmation]");

  const openModal = () => {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    const firstField = modal.querySelector("input[name='name']");
    if (firstField) {
      firstField.focus();
    }
  };

  const closeModal = () => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    if (fabButton) {
      fabButton.focus();
    }
  };

  fabButton?.addEventListener("click", openModal);

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.dataset?.productModalClose !== undefined ||
      target.classList.contains("product-modal__backdrop")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });

  formEl?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (confirmationEl) {
      confirmationEl.hidden = false;
      confirmationEl.textContent = `Thanks! We’ll reach out about ${productName}.`;
    }
    setTimeout(() => {
      closeModal();
    }, 800);
  });
}

// Render category product grids from shared data
const productsData = Array.isArray(window.productsData) ? window.productsData : [];
const productGrids = document.querySelectorAll("[data-product-grid]");

if (productsData.length && productGrids.length) {
  productGrids.forEach((grid) => {
    const category = grid.dataset.productGrid;
    const items = productsData.filter((p) => p.category === category);
    grid.innerHTML = items
      .map(
        (item) => `
          <article class="product-card">
            <div class="product-card__image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-card__body">
              <h3>${item.name}</h3>
            </div>
            <div class="product-card__footer">
              <a class="button button--primary product-cta" href="contact-us.html">Request info</a>
            </div>
          </article>
        `
      )
      .join("");
  });
}
