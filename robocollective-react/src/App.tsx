import { useEffect, useMemo, useState } from "react";

type StrapiMedia = {
  url?: string;
  alternativeText?: string;
  formats?: Record<string, { url?: string }>;
};

type StrapiEntity<T> = {
  id: number;
  attributes?: T;
};

type StrapiSingle<T> = {
  data?: StrapiEntity<T> | null;
};

type StrapiCollection<T> = {
  data?: StrapiEntity<T>[];
};

type HeroContent = {
  headingPrefix: string;
  headingSuffix: string;
  dynamicWords: string[];
  lede: string;
  meta: string[];
};

type ServiceCard = { title: string; description: string };
type ProcessStep = { title: string; description: string };
type MetricCard = { value: string; description: string };
type CaseStudy = { title: string; body: string; highlight?: boolean };
type CTAContent = {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
};

type LandingContent = {
  hero: HeroContent;
  services: ServiceCard[];
  processSteps: ProcessStep[];
  metrics: MetricCard[];
  caseStudies: CaseStudy[];
  cta: CTAContent;
};

type ProductCard = {
  id: number;
  name: string;
  category?: string;
  image?: string;
  href?: string;
  blurb?: string;
  badge?: string;
};

type BlogPost = {
  id: number;
  title: string;
  summary: string;
  href?: string;
  image?: string;
  publishedLabel?: string;
};

type LandingAttributes = {
  heroHeadingPrefix?: string;
  heroHeadingSuffix?: string;
  heroLede?: string;
  heroDynamicWords?: { word?: string }[];
  heroMeta?: { text?: string }[];
  services?: { title?: string; description?: string }[];
  processSteps?: { title?: string; description?: string }[];
  metrics?: { value?: string; description?: string }[];
  caseStudies?: { title?: string; summary?: string; highlight?: boolean }[];
  ctaHeading?: string;
  ctaBody?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
};

type ProductAttributes = {
  name?: string;
  slug?: string;
  shortDescription?: string;
  badge?: string;
  price?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  category?:
    | string
    | {
        data?: StrapiEntity<{ name?: string; slug?: string }>;
      };
  heroImage?: { data?: StrapiEntity<StrapiMedia> };
  gallery?: { data?: StrapiEntity<StrapiMedia>[] };
};

type PostAttributes = {
  title?: string;
  summary?: string;
  description?: string;
  slug?: string;
  url?: string;
  cover?: { data?: StrapiEntity<StrapiMedia> };
  publishedAt?: string;
};

const STRAPI_URL = (import.meta.env.VITE_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

const DEFAULT_LANDING: LandingContent = {
  hero: {
    headingPrefix: "RoboCollective.ai orchestrates",
    headingSuffix: " workflows so you can scale with confidence.",
    dynamicWords: ["adaptive", "human-centered", "intelligent"],
    lede:
      "We bridge strategic vision and operational precision through AI-native systems, data synthesis, and human-centered design.",
    meta: [
      "Trusted by engineering, product, and operations teams",
      "Dynamic pricing, predictable ROI",
    ],
  },
  services: [
    {
      title: "Intelligent automation",
      description: "Design, launch, and monitor AI agents that augment your existing platforms without compromising compliance.",
    },
    {
      title: "Data storytelling",
      description: "Translate complex signals into narratives that keep product, marketing, and ops aligned on next steps.",
    },
    {
      title: "Operational UX",
      description: "Architect human-centered dashboards, notifications, and playbooks for faster alignment during critical launches.",
    },
  ],
  processSteps: [
    {
      title: "Immersion",
      description: "We shadow your teams, capture constraints, and map the moments where automation provides immediate lift.",
    },
    {
      title: "System design",
      description: "Our architects build automation, interfaces, and guardrails that plug into your existing stack.",
    },
    {
      title: "Launch + learn",
      description: "We ship targeted experiences, monitor real-world signals, and evolve the system with your teams.",
    },
  ],
  metrics: [
    { value: "3.2x", description: "More runbooks automated within three months" },
    { value: "94%", description: "Stakeholder confidence after first sprint" },
    { value: "48", description: "Dashboards kept in sync with live AI insights" },
  ],
  caseStudies: [
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
    heading: "Embed RoboCollective.ai inside your next launch.",
    body: "Share your most strategic ambition, and we'll co-create a roadmap that combines automation, intelligence, and creative rigor.",
    primaryLabel: "View our products",
    primaryUrl: "/shop.html",
    secondaryLabel: "Download capability overview",
    secondaryUrl: "#",
  },
};

const DEFAULT_PRODUCTS: ProductCard[] = [
  {
    id: 1,
    name: "Humanoid G1 (Base/EDU)",
    category: "Educational",
    image: "/assets/products_shop_images/Humanoid_G1__BaseEDU__1.png",
    href: "/humanoid-g1-base-edu.html",
    blurb: "Responsive humanoid kit with a rich sensor stack for education and R&D.",
  },
  {
    id: 2,
    name: "Humanoid H1",
    category: "Specialty",
    image: "/assets/products_shop_images/Humanoid_H1_1.png",
    href: "/humanoid-h1.html",
    blurb: "High-agility humanoid designed for demanding research workflows.",
  },
  {
    id: 3,
    name: "Robodog Go2",
    category: "Specialty",
    image: "/assets/products_shop_images/Robodog__Go2Go2-W__1.png",
    href: "/robodog-go2-go2-w.html",
    blurb: "Next-gen quadruped mobility with upgraded perception and range.",
  },
  {
    id: 4,
    name: "Nimble Base Kit",
    category: "Nimble Drones",
    image: "/assets/products_shop_images/flapper-nimble-base-kit_1.png",
    href: "/nimble-base-kit.html",
    blurb: "Biomimetic micro-drone platform with lighthouse-ready flight control.",
  },
  {
    id: 5,
    name: "Delivery Robot (closed type)",
    category: "Service",
    image: "/assets/products_shop_images/Delivery_Robot__closed_type__1.png",
    href: "/delivery-robot-closed-type.html",
    blurb: "Secure, autonomous indoor delivery with reliable navigation.",
  },
  {
    id: 6,
    name: "Dual Arm Compound Robot",
    category: "Industrial",
    image: "/assets/products_shop_images/Dual_Arm_Compound_Robot.png",
    href: "/dual-arm-compound-robot.html",
    blurb: "Coordinated dual-arm manipulation for adaptive industrial tasks.",
  },
  {
    id: 7,
    name: "Smart Forklift",
    category: "Industrial",
    image: "/assets/products_shop_images/Smart_Forklift.png",
    href: "/smart-forklift.html",
    blurb: "Autonomous pallet handling with configurable payload and safety.",
  },
  {
    id: 8,
    name: "Mars Smartbot",
    category: "Service",
    image: "/assets/products_shop_images/Mars_Smartbot_1.png",
    href: "/mars-smartbot.html",
    blurb: "Multi-modal service robot with expressive UI and modular payloads.",
  },
];

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How Robots Help Restaurants Cut Costs: Embracing Restaurant Automation",
    summary:
      "Restaurants streamline delivery, inventory, and customer experience with automation that understands service flow.",
    href: "/blog/how-robots-help-restaurants-cut-costs.html",
    image: "/assets/dark/blog_25_sep.webp",
    publishedLabel: "September 25, 2025",
  },
  {
    id: 2,
    title: "Robot Rental for Events: Elevate Experiences with Cutting-Edge Robotics",
    summary:
      "Interactive robots forge unforgettable moments for university showcases, grand openings, and entertainment launches.",
    href: "/blog/robot-rental-for-events.html",
    image: "/assets/dark/blog_8_august.jpg",
    publishedLabel: "August 8, 2025",
  },
];

const mediaUrl = (media?: StrapiMedia) => {
  const raw = media?.formats?.medium?.url || media?.url;
  if (!raw) return undefined;
  return raw.startsWith("http") ? raw : `${STRAPI_URL}${raw}`;
};

const normalizeLanding = (payload: StrapiSingle<LandingAttributes>): LandingContent => {
  const attributes = payload?.data?.attributes;
  if (!attributes) return DEFAULT_LANDING;

  const heroDynamicWords = (attributes.heroDynamicWords || [])
    .map((item) => item?.word)
    .filter(Boolean) as string[];

  const heroMeta = (attributes.heroMeta || [])
    .map((item) => item?.text)
    .filter(Boolean) as string[];

  const services =
    attributes.services?.map((item) => ({
      title: item.title || "",
      description: item.description || "",
    })) || [];

  const processSteps =
    attributes.processSteps?.map((item) => ({
      title: item.title || "",
      description: item.description || "",
    })) || [];

  const metrics =
    attributes.metrics?.map((item) => ({
      value: item.value || "",
      description: item.description || "",
    })) || [];

  const caseStudies =
    attributes.caseStudies?.map((item) => ({
      title: item.title || "",
      body: item.summary || "",
      highlight: item.highlight,
    })) || [];

  const cta: CTAContent = {
    heading: attributes.ctaHeading || DEFAULT_LANDING.cta.heading,
    body: attributes.ctaBody || DEFAULT_LANDING.cta.body,
    primaryLabel: attributes.ctaPrimaryLabel || DEFAULT_LANDING.cta.primaryLabel,
    primaryUrl: attributes.ctaPrimaryUrl || DEFAULT_LANDING.cta.primaryUrl,
    secondaryLabel: attributes.ctaSecondaryLabel || DEFAULT_LANDING.cta.secondaryLabel,
    secondaryUrl: attributes.ctaSecondaryUrl || DEFAULT_LANDING.cta.secondaryUrl,
  };

  return {
    hero: {
      headingPrefix: attributes.heroHeadingPrefix || DEFAULT_LANDING.hero.headingPrefix,
      headingSuffix: attributes.heroHeadingSuffix || DEFAULT_LANDING.hero.headingSuffix,
      dynamicWords: heroDynamicWords.length ? heroDynamicWords : DEFAULT_LANDING.hero.dynamicWords,
      lede: attributes.heroLede || DEFAULT_LANDING.hero.lede,
      meta: heroMeta.length ? heroMeta : DEFAULT_LANDING.hero.meta,
    },
    services: services.length ? services : DEFAULT_LANDING.services,
    processSteps: processSteps.length ? processSteps : DEFAULT_LANDING.processSteps,
    metrics: metrics.length ? metrics : DEFAULT_LANDING.metrics,
    caseStudies: caseStudies.length ? caseStudies : DEFAULT_LANDING.caseStudies,
    cta,
  };
};

const normalizeProduct = (entity?: StrapiEntity<ProductAttributes>): ProductCard | null => {
  if (!entity?.attributes) return null;
  const attributes = entity.attributes;
  const category =
    typeof attributes.category === "string"
      ? attributes.category
      : attributes.category?.data?.attributes?.name;

  const heroImage = mediaUrl(attributes.heroImage?.data?.attributes);
  const galleryImage = mediaUrl(attributes.gallery?.data?.[0]?.attributes);
  const href =
    attributes.ctaUrl ||
    (attributes.slug ? `/products/${attributes.slug}` : undefined);

  return {
    id: entity.id,
    name: attributes.name || "Product",
    category: category || undefined,
    image: heroImage || galleryImage,
    href,
    blurb: attributes.shortDescription || undefined,
    badge: attributes.badge || undefined,
  };
};

const normalizePost = (entity?: StrapiEntity<PostAttributes>): BlogPost | null => {
  if (!entity?.attributes) return null;
  const attributes = entity.attributes;
  const href = attributes.url || (attributes.slug ? `/blog/${attributes.slug}` : undefined);
  const date = attributes.publishedAt ? new Date(attributes.publishedAt) : null;

  return {
    id: entity.id,
    title: attributes.title || "Untitled post",
    summary: attributes.summary || attributes.description || "",
    href,
    image: mediaUrl(attributes.cover?.data?.attributes),
    publishedLabel: date ? date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : undefined,
  };
};

async function fetchLanding() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/landing?populate=deep`);
    if (!response.ok) throw new Error("Landing request failed");
    const payload = (await response.json()) as StrapiSingle<LandingAttributes>;
    return normalizeLanding(payload);
  } catch (error) {
    console.warn("Falling back to default landing copy", error);
    return DEFAULT_LANDING;
  }
}

async function fetchProducts() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?populate=deep`);
    if (!response.ok) throw new Error("Products request failed");
    const payload = (await response.json()) as StrapiCollection<ProductAttributes>;
    const normalized = (payload.data || []).map(normalizeProduct).filter(Boolean) as ProductCard[];
    return normalized;
  } catch (error) {
    console.warn("Falling back to default products", error);
    return DEFAULT_PRODUCTS;
  }
}

async function fetchPosts() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/posts?populate=deep`);
    if (!response.ok) throw new Error("Posts request failed");
    const payload = (await response.json()) as StrapiCollection<PostAttributes>;
    const normalized = (payload.data || []).map(normalizePost).filter(Boolean) as BlogPost[];
    return normalized;
  } catch (error) {
    console.warn("Falling back to default posts", error);
    return DEFAULT_POSTS;
  }
}

const buildHeroMeta = (meta: string[]) => {
  if (!meta.length) return null;
  return (
    <div className="hero-meta">
      {meta.map((item, index) => (
        <span key={item + index} className="hero-meta__item">
          {item}
          {index < meta.length - 1 && <div className="hero-meta-divider" aria-hidden="true" />}
        </span>
      ))}
    </div>
  );
};

function App() {
  const [landing, setLanding] = useState<LandingContent>(DEFAULT_LANDING);
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroWords = useMemo(
    () => (landing.hero.dynamicWords.length ? landing.hero.dynamicWords : DEFAULT_LANDING.hero.dynamicWords),
    [landing.hero.dynamicWords],
  );

  const productList = products.length ? products : DEFAULT_PRODUCTS;
  const postList = posts.length ? posts : DEFAULT_POSTS;
  const heroWord = heroWords[heroIndex] || heroWords[0];

  useEffect(() => {
    let isMounted = true;

    fetchLanding().then((payload) => {
      if (isMounted && payload) setLanding(payload);
    });

    fetchProducts().then((payload) => {
      if (isMounted && payload?.length) setProducts(payload);
    });

    fetchPosts().then((payload) => {
      if (isMounted && payload?.length) setPosts(payload);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!heroWords.length) return undefined;
    setHeroIndex(0);
    const timer = window.setInterval(
      () => setHeroIndex((current) => (current + 1) % heroWords.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [heroWords]);

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="logo-mark site-logo" href="#top" aria-label="RoboCollective.ai home">
          <img src="/assets/light/Logo 4 light.png" alt="RoboCollective.ai logo" />
        </a>
        <a className="logo-copy" href="#top">
          <strong>RoboCollective.ai</strong>
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#products">Products</a>
          <a href="#case-studies">Case studies</a>
          <a href="#blog">Blog</a>
          <a href="#cta">Contact</a>
        </nav>
        <a className="button button--secondary nav-cta" href="#cta">
          Talk with us
        </a>
      </header>

      <main>
        <section className="hero hero--video" id="top">
          <div className="hero-video" aria-hidden="true">
            <video className="hero-video__source" autoPlay muted loop playsInline aria-hidden="true">
              <source src="/assets/dark/hero-futuristic-quadrup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-video__overlay" />
          </div>
          <div className="hero-content">
            <div className="eyebrow">STRATEGY · SYSTEMS · EXPERIENCE</div>
            <h1 className="hero-heading">
              <span>{landing.hero.headingPrefix} </span>
              <span className="hero-dynamic">{heroWord}</span>
              <span> {landing.hero.headingSuffix}</span>
            </h1>
            <p className="hero-lede">{landing.hero.lede}</p>
            <div className="hero-actions">
              <a className="button button--primary" href={landing.cta.primaryUrl || "#"}>
                {landing.cta.primaryLabel}
              </a>
              <a className="button button--secondary" href={landing.cta.secondaryUrl || "#"}>
                {landing.cta.secondaryLabel}
              </a>
            </div>
            {buildHeroMeta(landing.hero.meta)}
          </div>
        </section>

        <section className="highlights reveal">
          <article>
            <h3>Premium Robots</h3>
            <p>High-quality robots and accessories built for real work.</p>
          </article>
          <article>
            <h3>Expert Support</h3>
            <p>Compare models, plan deployment, and unlock ROI faster.</p>
          </article>
          <article>
            <h3>Global Delivery</h3>
            <p>Shipping, customs guidance, and on-site or remote setup.</p>
          </article>
        </section>

        <section className="services-section reveal" id="services">
          <div className="section-heading">
            <h2>What we deliver</h2>
            <p>AI-native programs that pair automation with human-centered experience.</p>
          </div>
          <div className="card-grid">
            {landing.services.map((service, index) => (
              <article className="card" key={service.title + index} data-service-card>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section reveal" id="process">
          <div className="section-heading">
            <h2>How we work</h2>
            <p>Structured sprints that keep teams aligned while we ship.</p>
          </div>
          <div className="process-cards">
            {landing.processSteps.map((step, index) => (
              <article className="process-card" key={step.title + index} data-process-step>
                <div className="process-card__icon">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="metrics-section reveal">
          <div className="section-heading">
            <h2>Proof in the numbers</h2>
            <p>Predictable lift across automation, orchestration, and experience.</p>
          </div>
          <div className="metric-grid">
            {landing.metrics.map((metric, index) => (
              <article className="metric-card" key={metric.value + index} data-metric>
                <strong>{metric.value}</strong>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section reveal" id="case-studies">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>Case studies across product launches, research ops, and automation.</p>
          </div>
          <div className="case-grid">
            {landing.caseStudies.map((item, index) => (
              <article
                className={`case-card${item.highlight ? " case-card--glow" : ""}`}
                key={item.title + index}
                data-case-card
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.highlight && <span className="case-pill">Featured</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="products-section reveal" id="products">
          <div className="section-heading">
            <h2>Browse our products</h2>
            <p>Exclusive robots and kits with specialist support.</p>
          </div>
          <div className="product-grid" data-product-grid="all">
            {productList.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-card__image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={320}
                    height={180}
                  />
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                </div>
                <div className="product-card__body">
                  <div className="product-meta">
                    <span className="pill">{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  {product.blurb && <p>{product.blurb}</p>}
                </div>
                <div className="product-card__footer">
                  <a className="button button--primary" href={product.href || "#"}>
                    View details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="blog-section reveal" id="blog">
          <div className="section-heading">
            <h2>Insights & stories</h2>
            <p>Research-backed guidance on automation, experience, and robotics.</p>
          </div>
          <div className="blog-posts">
            {postList.map((post) => (
              <article className="blog-post" key={post.id}>
                <div className="blog-post__image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-post__content">
                  {post.publishedLabel && <div className="blog-post__meta">{post.publishedLabel}</div>}
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <a className="blog-post__footer" href={post.href || "#"}>
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section reveal" id="cta">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Let&apos;s build</p>
              <h2 data-cta-heading>{landing.cta.heading}</h2>
              <p data-cta-body>{landing.cta.body}</p>
              <div className="hero-actions">
                <a className="button button--primary" href={landing.cta.primaryUrl} data-cta-action-primary>
                  {landing.cta.primaryLabel}
                </a>
                <a className="button button--secondary" href={landing.cta.secondaryUrl} data-cta-action-secondary>
                  {landing.cta.secondaryLabel}
                </a>
              </div>
            </div>
            <div className="cta-visual">
              <img src="/assets/dark/meet caipo_home_page.png" alt="RoboCollective product montage" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <a className="logo-mark site-logo" href="#top" aria-label="RoboCollective.ai home">
              <img src="/assets/light/Logo 4 light.png" alt="RoboCollective.ai logo" />
            </a>
            <p className="footer-copy">
              Robots, automation, and experience design built for teams that demand reliability and velocity.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#case-studies">Case studies</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="about.html">About</a>
              <a href="contact-us.html">Contact</a>
              <a href="https://hephaestus.international/" target="_blank" rel="noreferrer">Internships</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RoboCollective.ai</span>
          <div className="footer-actions">
            <a href="about.html#privacy">Privacy</a>
            <a href="mailto:sales@robocollective.ai">sales@robocollective.ai</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
