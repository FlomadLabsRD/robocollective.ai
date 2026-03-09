"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { ProductDetails } from "@/data/products";

// ─── Image gallery map: product id → ordered image paths ──────────────────────
const PRODUCT_IMAGES: Record<string, string[]> = {
  // Nimble Drones
  d1:  ["/assets/products/flapper-nimble-base-kit_1.png","/assets/products/flapper-nimble-base-kit_2.png","/assets/products/flapper-nimble-base-kit_3.png","/assets/products/flapper-nimble-base-kit_4.png","/assets/products/flapper-nimble-base-kit_5.png","/assets/products/flapper-nimble-base-kit_6.png","/assets/products/flapper-nimble-base-kit_7.png","/assets/products/flapper-nimble-base-kit_8.png"],
  d2:  ["/assets/products/flapper-nimble-starter-kit_1.png","/assets/products/flapper-nimble-starter-kit_2.png","/assets/products/flapper-nimble-starter-kit_3.png","/assets/products/flapper-nimble-starter-kit_4.png","/assets/products/flapper-nimble-starter-kit_5.png","/assets/products/flapper-nimble-starter-kit_6.png","/assets/products/flapper-nimble-starter-kit_7.png","/assets/products/flapper-nimble-starter-kit_8.png"],
  d3:  ["/assets/products/flapper-nimble-lighthouse-bundle_1.png","/assets/products/flapper-nimble-lighthouse-bundle_2.png","/assets/products/flapper-nimble-lighthouse-bundle_3.png","/assets/products/flapper-nimble-lighthouse-bundle_4.png","/assets/products/flapper-nimble-lighthouse-bundle_5.png","/assets/products/flapper-nimble-lighthouse-bundle_6.png","/assets/products/flapper-nimble-lighthouse-bundle_7.png"],
  d4:  ["/assets/products/base-multi-kit-2x_1.png","/assets/products/base-multi-kit-2x_2.png","/assets/products/base-multi-kit-2x_3.png","/assets/products/base-multi-kit-2x_4.png"],
  d5:  ["/assets/products/flapper-nimble-swarm-bundlex4_1.png","/assets/products/flapper-nimble-swarm-bundlex4_2.png"],
  d6:  ["/assets/products/crazyradio-2-usb-dongle_1.png","/assets/products/crazyradio-2-usb-dongle_2.png"],
  d7:  ["/assets/products/battery-for-nimble.png"],
  d8:  ["/assets/products/extra-wing-set-for-nimble_1.png","/assets/products/extra-wing-set-for-nimble_2.png","/assets/products/extra-wing-set-for-nimble_3.png"],
  d9:  ["/assets/products/base-multi-kit-3x_1.png","/assets/products/base-multi-kit-3x_2.png","/assets/products/base-multi-kit-3x_3.png","/assets/products/base-multi-kit-3x_4.png"],
  d10: ["/assets/products/lighthouse-base-station.png"],
  d11: ["/assets/products/lighthouse-support-kit-for-nimble_1.png","/assets/products/lighthouse-support-kit-for-nimble_3.png"],
  d12: ["/assets/products/24-ghz-transmitter-with-edge-tx_1.png","/assets/products/24-ghz-transmitter-with-edge-tx_2.png"],
  d13: ["/assets/products/frsky-receiver.png"],
  d14: ["/assets/products/set-of-body-shells-for-nimble.png","/assets/products/lighthouse-shells-kit-for-nimble_1.png","/assets/products/lighthouse-shells-kit-for-nimble_2.png","/assets/products/lighthouse-shells-kit-for-nimble_3.png"],
  // Humanoids
  h1:  ["/assets/products/Humanoid_G1__BaseEDU__1.png","/assets/products/Humanoid G1 (BaseEDU)_2.png","/assets/products/Humanoid_G1__BaseEDU__3.png"],
  h2:  ["/assets/products/Humanoid_H1_1.png","/assets/products/Humanoid_H1_2.jpg","/assets/products/Humanoid_H1_3.png","/assets/products/Humanoid_H1_4.png","/assets/products/Humanoid_H1_5.png","/assets/products/Humanoid_H1_6.png","/assets/products/Humanoid_H1_7.png"],
  h3:  ["/assets/products/Humanoid_Oli_1.png","/assets/products/Humanoid Oli_2.jpg","/assets/products/Humanoid_Oli_3.png"],
  h4:  ["/assets/products/Humanoid_R1.png"],
  h5:  ["/assets/products/Humanoid_Mini_Hi_1.png","/assets/products/Humanoid_Mini_Hi_2.png"],
  // Robodogs
  r1:  ["/assets/products/Robodog_Go1_1.png","/assets/products/Robodog Go1_2.webp","/assets/products/Robodog Go1_3.webp","/assets/products/Robodog Go1_4.webp"],
  r2:  ["/assets/products/Robodog_B2.png"],
  r3:  ["/assets/products/Robodog_AlienGo_1.png","/assets/products/Robodog_AlienGo_2.png","/assets/products/Robodog_AlienGo_3.png","/assets/products/Robodog_AlienGo_4.png"],
  r4:  ["/assets/products/Robodog__B2B2-W__1.png","/assets/products/Robodog__B2B2-W__2.png","/assets/products/Robodog__B2B2-W__3.png","/assets/products/Robodog__B2B2-W__4.png","/assets/products/Robodog__B2B2-W__5.png"],
  r5:  ["/assets/products/Robodog__Go2Go2-W__1.png","/assets/products/Robodog__Go2Go2-W__2.png","/assets/products/Robodog__Go2Go2-W__3.png","/assets/products/Robodog__Go2Go2-W__4.png","/assets/products/Robodog__Go2Go2-W__5.png","/assets/products/Robodog__Go2Go2-W__6.png"],
  // Educational
  e1:  ["/assets/products/Mini_p_Bipedal_Robot_1.png","/assets/products/Mini_p_Bipedal_Robot_2.png","/assets/products/Mini_p_Bipedal_Robot_3.png"],
  g1:  ["/assets/products/Humanoid_G1__BaseEDU__1.png","/assets/products/Humanoid G1 (BaseEDU)_2.png","/assets/products/Humanoid_G1__BaseEDU__3.png"],
  // Industrial Arms
  i1:  ["/assets/products/Robotic_Arm__RM65-6F.png"],
  i2:  ["/assets/products/Robotic_Arm__RM65-B.png"],
  i3:  ["/assets/products/Robotic_Arm__RM75-6F.png"],
  i4:  ["/assets/products/Robotic_Arm__RM75-B.png"],
  i5:  ["/assets/products/Robotic_Arm__RML63-6F.png"],
  i6:  ["/assets/products/Robotic_Arm__RML63-B.png"],
  i7:  ["/assets/products/Robotic_Arm__ECO62-B.png"],
  i8:  ["/assets/products/Robotic_Arm__ECO65-6F.png"],
  i9:  ["/assets/products/Robotic_Arm__ECO65-B.png"],
  i10: ["/assets/products/Robotic_Arm__GEN72-B.png"],
  // Compound Arms
  i11: ["/assets/products/Single_Arm_Compound_Robot___Precision__Mobility__and_Versatility.png","/assets/products/Single_Arm_Compound_Robot___Compact__Mobile__and_Intelligent_Automation_2.png"],
  i12: ["/assets/products/Single_Arm_Compound_Robot___Compact__Mobile__and_Intelligent_Automation.png"],
  i13: ["/assets/products/Single_Arm_Lifting_Compound_Robot_1.png","/assets/products/Single_Arm_Lifting_Compound_Robot_2.png"],
  i14: ["/assets/products/Dual_Arm_Compound_Robot.png"],
  // AMRs
  i15: ["/assets/products/Heavy_Load_AMR_1.png"],
  i16: ["/assets/products/Sub_Lift_Robot_1.png","/assets/products/Sub Lift Robot_2.jpg"],
  i17: ["/assets/products/Smart_Forklift.png"],
  i18: ["/assets/products/Sub_Lift_Robot_1.png"],
  i19: ["/assets/products/Conveyor_Robot.png"],
  i20: ["/assets/products/Base_Chassis_1.png","/assets/products/Base Chassis_2.jpg","/assets/products/Base Chassis_3.jpg","/assets/products/Base Chassis_4.jpg"],
  i21: ["/assets/products/Hermes Chassis_1.png","/assets/products/Hermes Chassis_2.png","/assets/products/Hermes Chassis_3.png","/assets/products/Hermes Chassis_4.png"],
  // Grippers
  i22: ["/assets/products/Gripper__AG-160-95__1.png","/assets/products/Gripper (AG-160-95)_2.webp","/assets/products/Gripper__AG-160-95__3.png"],
  i23: ["/assets/products/Gripper__EG2-SF16__1.png","/assets/products/Gripper__EG2-SF16__2.png","/assets/products/Gripper__EG2-SF16__3.png"],
  i24: ["/assets/products/Gripper__ERG32-150.png"],
  i25: ["/assets/products/Gripper__EVS08_1.png","/assets/products/Gripper__EVS08__2.png","/assets/products/Gripper__EVS08__3.png"],
  i26: ["/assets/products/Gripper__RG52-050.png"],
  i27: ["/assets/products/Gripper__RGI-100-30.png"],
  i28: ["/assets/products/Flexible_Gripper__RM-SFG.png"],
  i29: ["/assets/products/Dex._Hand__RM56S2B__2L2R_1.png","/assets/products/Dex._Hand__RM56S2B__2L2R_2.png","/assets/products/Dex._Hand__RM56S2B__2L2R_3.png","/assets/products/Dex._Hand__RM56S2B__2L2R_4.png","/assets/products/Dex._Hand__RM56S2B__2L2R_5.png","/assets/products/Dex._Hand__RM56S2B__2L2R_6.png","/assets/products/Dex._Hand__RM56S2B__2L2R_7.png"],
  // Cameras
  i30: ["/assets/products/Camera_RM-MVQ__1.png","/assets/products/Camera_RM-MVQ__2.png"],
  i31: ["/assets/products/Camera__D435C.png"],
  i32: ["/assets/products/Camera__DaBai_DCW.png"],
  // Service
  s1:  ["/assets/products/Hotel_Robot_1.png","/assets/products/Hotel Robot_2.jpg","/assets/products/Hotel Robot_3.jpg","/assets/products/Hotel Robot_4.jpg"],
  s2:  ["/assets/products/Delivery_Robot__closed_type__1.png","/assets/products/Delivery Robot (closed type)_2.webp","/assets/products/Delivery Robot (closed type)_3.webp","/assets/products/Delivery Robot (closed type)_4.webp"],
  s3:  ["/assets/products/Factory_Delivery_Robot_1.png","/assets/products/Factory Delivery Robot_2.jpg"],
  s4:  ["/assets/products/Mars_Smartbot_1.png","/assets/products/Mars Smartbot_2.jpg","/assets/products/Mars Smartbot_3.jpg","/assets/products/Mars Smartbot_4.jpg"],
  s5:  ["/assets/products/Disinfectant_Mini_Robot_1.png","/assets/products/Disinfectant Mini Robot_2.webp","/assets/products/Disinfectant Mini Robot_3.webp","/assets/products/Disinfectant Mini Robot_4.webp"],
  s6:  ["/assets/products/Healthcare_Robot.png"],
  s7:  ["/assets/products/Water 2_1.png","/assets/products/Water 2_2.png","/assets/products/Water 2_3.png"],
  // Specialty
  sp1: ["/assets/products/Tron_1_1.png","/assets/products/Tron_1_2.png","/assets/products/Tron_1_3.png","/assets/products/Tron_1_4.png","/assets/products/Tron_1_5.png","/assets/products/Tron_1_6.png"],
};

// ─── Description txt file map: product id → public path ──────────────────────
const PRODUCT_DESCRIPTION_FILE: Record<string, string> = {
  g1:  "/assets/products_shop_info/Humanoid G1 (BaseEDU).txt",
  h1:  "/assets/products_shop_info/Humanoid G1 (BaseEDU).txt",
  h2:  "/assets/products_shop_info/Humanoid H1.txt",
  h3:  "/assets/products_shop_info/Humanoid Oli.txt",
  h4:  "/assets/products_shop_info/Humanoid R1.txt",
  h5:  "/assets/products_shop_info/Humanoid Mini Hi.txt",
  r1:  "/assets/products_shop_info/Robodog Go1.txt",
  r2:  "/assets/products_shop_info/Robodog B2.txt",
  r3:  "/assets/products_shop_info/Robodog AlienGo.txt",
  r4:  "/assets/products_shop_info/Robodog (B2B2-W).txt",
  r5:  "/assets/products_shop_info/Robodog (Go2Go2-W).txt",
  e1:  "/assets/products_shop_info/Mini pi Bipedal Robot.txt",
  i1:  "/assets/products_shop_info/Robotic Arm (RM65-6F).txt",
  i2:  "/assets/products_shop_info/Robotic Arm (RM65-B).txt",
  i3:  "/assets/products_shop_info/Robotic Arm (RM75-6F).txt",
  i4:  "/assets/products_shop_info/Robotic Arm (RM75-B).txt",
  i5:  "/assets/products_shop_info/Robotic Arm (RML63-6F).txt",
  i6:  "/assets/products_shop_info/Robotic Arm (RML63-B).txt",
  i7:  "/assets/products_shop_info/Robotic Arm (ECO62-B).txt",
  i8:  "/assets/products_shop_info/Robotic Arm (ECO65-6F).txt",
  i9:  "/assets/products_shop_info/Robotic Arm (ECO65-B).txt",
  i10: "/assets/products_shop_info/Robotic Arm (GEN72-B).txt",
  i11: "/assets/products_shop_info/Single Arm Compound Robot – Precision, Mobility, and Versatility.txt",
  i12: "/assets/products_shop_info/Single Arm Compound Robot – Compact, Mobile, and Intelligent Automation.txt",
  i13: "/assets/products_shop_info/Single Arm Lifting Compound Robot.txt",
  i14: "/assets/products_shop_info/Dual Arm Compound Robot.txt",
  i15: "/assets/products_shop_info/Heavy Load AMR.txt",
  i16: "/assets/products_shop_info/L Lift AMR.txt",
  i17: "/assets/products_shop_info/Smart Forklift.txt",
  i18: "/assets/products_shop_info/Sub Lift Robot.txt",
  i19: "/assets/products_shop_info/Conveyor Robot.txt",
  i20: "/assets/products_shop_info/Base Chassis.txt",
  i21: "/assets/products_shop_info/Hermes Chassis.txt",
  i22: "/assets/products_shop_info/Gripper (AG-160-95).txt",
  i23: "/assets/products_shop_info/Gripper (EG2-SF16).txt",
  i24: "/assets/products_shop_info/Gripper (ERG32-150).txt",
  i25: "/assets/products_shop_info/Gripper (EVS08).txt",
  i26: "/assets/products_shop_info/Gripper (RG52-050).txt",
  i27: "/assets/products_shop_info/Gripper (RGI-100-30).txt",
  i28: "/assets/products_shop_info/Flexible Gripper (RM-SFG).txt",
  i29: "/assets/products_shop_info/Dex. Hand (RM56S2B) 2L2R.txt",
  i30: "/assets/products_shop_info/Camera (RM-MVQ).txt",
  i31: "/assets/products_shop_info/Camera (D435C).txt",
  i32: "/assets/products_shop_info/Camera (DaBai DCW).txt",
  s1:  "/assets/products_shop_info/Hotel Robot.txt",
  s2:  "/assets/products_shop_info/Delivery Robot (closed type).txt",
  s3:  "/assets/products_shop_info/Factory Delivery Robot.txt",
  s4:  "/assets/products_shop_info/Mars Smartbot.txt",
  s5:  "/assets/products_shop_info/Disinfectant Mini Robot.txt",
  s6:  "/assets/products_shop_info/Healthcare Robot.txt",
  s7:  "/assets/products_shop_info/Water 2.txt",
  sp1: "/assets/products_shop_info/Tron 1.txt",
};

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images, themeColor }: { images: string[]; themeColor: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const themeAccent = themeColor === "sky" ? "#38bdf8"
    : themeColor === "orange" ? "#fb923c"
    : themeColor === "purple" ? "#c084fc"
    : themeColor === "pink" ? "#f472b6"
    : "#34d399"; // emerald default

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Product image ${current + 1}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-contain p-6"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-neutral-700 flex items-center justify-center hover:bg-black transition-colors z-10"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-neutral-700 flex items-center justify-center hover:bg-black transition-colors z-10"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-neutral-400 font-mono">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200"
              style={{ borderColor: i === current ? themeAccent : "rgba(255,255,255,0.1)" }}
            >
              <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-contain bg-neutral-900 p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Extract YouTube video ID from various URL formats ────────────────────────
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

// ─── Parse content: extract [embed] URL and clean HTML ───────────────────────
function parseContent(raw: string): { videoId: string | null; html: string } {
  // Extract [embed]...[/embed] tag
  const embedMatch = raw.match(/\[embed\](.*?)\[\/embed\]/s);
  let videoId: string | null = null;
  if (embedMatch) {
    videoId = getYouTubeId(embedMatch[1].trim());
  }
  // Remove the [embed] block and any bare URLs at the start
  let html = raw
    .replace(/\[embed\].*?\[\/embed\]/s, "")
    .replace(/^https?:\/\/\S+/m, "")
    .trim();
  return { videoId, html };
}

// ─── HTML Description (fetched client-side) ───────────────────────────────────
function ProductDescription({ productId }: { productId: string }) {
  const [content, setContent] = useState<{ videoId: string | null; html: string } | null>(null);

  useEffect(() => {
    const file = PRODUCT_DESCRIPTION_FILE[productId];
    if (!file) return;
    fetch(file)
      .then(r => r.ok ? r.text() : null)
      .then(text => text && setContent(parseContent(text)))
      .catch(() => {});
  }, [productId]);

  if (!content) return null;

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 py-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16" />

        {/* YouTube Embed */}
        {content.videoId && (
          <div className="w-full mb-16 rounded-2xl overflow-hidden aspect-video bg-neutral-900">
            <iframe
              src={`https://www.youtube.com/embed/${content.videoId}`}
              title="Product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* Rich HTML Content */}
        {content.html && (
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:text-white prose-h2:mb-4
              prose-h3:text-xl prose-h3:text-neutral-200 prose-h3:mb-3
              prose-p:text-neutral-400 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-neutral-400 prose-li:marker:text-neutral-600
              prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        )}
      </div>
    </section>
  );
}

// ─── Main ProductHero ─────────────────────────────────────────────────────────
export function ProductHero({ product }: { product: ProductDetails }) {
  const images = PRODUCT_IMAGES[product.id] ?? [];

  const themeShadowClass = product.themeColor === "emerald" ? "bg-emerald-500/10"
    : product.themeColor === "sky" ? "bg-sky-500/10"
    : product.themeColor === "orange" ? "bg-orange-500/10"
    : product.themeColor === "purple" ? "bg-purple-500/10"
    : product.themeColor === "pink" ? "bg-pink-500/10" : "bg-emerald-500/10";

  const themeTextClass = product.themeColor === "emerald" ? "text-emerald-400"
    : product.themeColor === "sky" ? "text-sky-400"
    : product.themeColor === "orange" ? "text-orange-400"
    : product.themeColor === "purple" ? "text-purple-400"
    : product.themeColor === "pink" ? "text-pink-400" : "text-emerald-400";

  const badgeBorderClass = product.themeColor === "emerald" ? "border-emerald-500/30"
    : product.themeColor === "sky" ? "border-sky-500/30"
    : product.themeColor === "orange" ? "border-orange-500/30"
    : product.themeColor === "purple" ? "border-purple-500/30"
    : product.themeColor === "pink" ? "border-pink-500/30" : "border-emerald-500/30";

  const gradientTextClass = product.themeColor === "emerald" ? "from-emerald-400 to-teal-600"
    : product.themeColor === "sky" ? "from-sky-400 to-blue-600"
    : product.themeColor === "orange" ? "from-orange-400 to-red-600"
    : product.themeColor === "purple" ? "from-purple-400 to-indigo-600"
    : product.themeColor === "pink" ? "from-pink-400 to-rose-600" : "from-emerald-400 to-teal-600";

  return (
    <>
      <section className="relative w-full pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-1/4 right-1/4 w-[800px] h-[800px] ${themeShadowClass} rounded-full blur-[120px] opacity-40 mix-blend-screen`} />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-neutral-600/10 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: "perspective(1000px) rotateX(60deg) translateY(100px) scale(2)",
              transformOrigin: "bottom",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Back Navigation */}
          <Link href="/products" className="inline-flex items-center gap-2 mb-12 text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className={`${themeShadowClass} ${themeTextClass} px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${badgeBorderClass} flex items-center gap-1`}>
                  <Zap className="w-3 h-3" /> {product.badge}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-6 uppercase"
              >
                {product.name}
                {product.subtitle && (
                  <>
                    <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientTextClass}`}>
                      {product.subtitle}
                    </span>
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10"
              >
                {product.description}
              </motion.p>

              {product.price && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={`text-2xl font-black ${themeTextClass} mb-8`}
                >
                  {product.price}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="inline-block relative overflow-hidden group bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105">
                  <span className="relative z-10">Request a Quote</span>
                  <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
                <Link href="#specs" className="inline-block px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm text-neutral-300 border border-neutral-700 hover:border-neutral-500 transition-colors text-center">
                  View Full Specs
                </Link>
              </motion.div>
            </div>

            {/* Right: Image Carousel */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <ImageCarousel images={images} themeColor={product.themeColor} />
              </motion.div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Rich HTML Description */}
      <ProductDescription productId={product.id} />
    </>
  );
}
