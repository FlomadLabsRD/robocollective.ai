/**
 * Product ID to image path(s). Images are served from /assets/ (public/assets/).
 * First image in array is the primary card image.
 */
export const productImages: Record<string, string | string[]> = {
  // Nimble Drones - Kits & Bundles
  d1: "/assets/flapper-nimble-base-kit_1-77357050-f054-48c2-91b1-93ad32b5273c.png",
  d2: "/assets/flapper-nimble-starter-kit_1-5184ce34-7ca4-41a9-80c1-0a9d99df7df1.png",
  d3: "/assets/flapper-nimble-lighthouse-bundle_1-95edd512-81c1-4412-8c1c-d98ca2d22ccf.png",
  // Nimble Drones - Scale to Fleets and Teaching Labs
  d4: "/assets/base-multi-kit-2x_1-e4bd71f2-2336-49f2-8812-50b4a8f7b36d.png",
  d5: "/assets/flapper-nimble-swarm-bundlex4_1-8e247644-74cf-44a1-ac44-f993654af081.png",
  d9: "/assets/base-multi-kit-3x_1-c5196986-4e9f-4b1f-afd5-8b14015b9aa9.png",
  // Nimble Drones - Accessories and Spares
  d6: "/assets/crazyradio-2-usb-dongle_1-7fe436bf-b166-4c51-929a-54297531bb7a.png",
  d7: "/assets/battery-for-nimble-3dcf2efd-da0c-467f-a1c8-cb01f988bbbb.png",
  d8: "/assets/butterfly-wing-set-for-nimble_1-e3054c25-3f2d-459f-bc0e-4fb902f4177b.png",
  d10: "/assets/lighthouse-base-station-97b6d03b-fd0f-46ed-8b7b-2ff932678bf0.png",
  d11: "/assets/lighthouse-support-kit-for-nimble_1-f884ecfd-43c7-474c-b8a1-74c18cc7c78f.png",
  d12: "/assets/24-ghz-transmitter-with-edge-tx_1-250b8f0d-85b6-4374-8830-ef2ce07bb795.png",
  d13: "/assets/frsky-receiver-5656ab06-da6a-41ba-a965-8948e048b0ab.png",
  d14: "/assets/set-of-body-shells-for-nimble-939a1a0a-4736-4732-8cbe-a0b2639e071e.png",
  // Educational
  g1: "/assets/Humanoid_G1__BaseEDU__1-6fdb27f5-8fa2-4d56-83ea-306562e14bf5.png",
  e1: "/assets/Base_Chassis_1-f264e3cb-555f-47cb-8d02-d61ac3010a19.png",
  e2: "/assets/Robotic_Arm__RM75-B-7ad7eea1-b0e6-488d-bc5a-4c45e11c5b09.png",
  // Industrial
  i1: "/assets/Robotic_Arm__RM75-B-7ad7eea1-b0e6-488d-bc5a-4c45e11c5b09.png",
  i2: "/assets/Conveyor_Robot-2641e5dc-1dba-4a1e-9576-012ee51536ad.png",
  i3: "/assets/Heavy_Load_AMR_1-43f101d8-c60e-485f-93f1-1c4fc1218abf.png",
  // Service
  s1: "/assets/Hotel_Robot_1-36666498-5e6c-4292-b61e-41826eb51cc1.png",
  s2: "/assets/Delivery_Robot__closed_type__1-0510831e-fe8c-4c44-a0a4-f407af5cf18b.png",
  s3: "/assets/Disinfectant_Mini_Robot_1-c5558241-9976-4f32-a48b-bc4481677a61.png",
  // Specialty
  sp1: "/assets/Water_2_1-f2a8f274-3014-4715-9867-2f79dcfaa769.png",
  sp2: "/assets/Sub_Lift_Robot_1-d5172d6d-7232-4f14-b875-c982abb17816.png",
};

/** Get primary image URL for a product id (string or first of array). */
export function getProductImage(productId: string): string | undefined {
  const val = productImages[productId];
  if (!val) return undefined;
  return Array.isArray(val) ? val[0] : val;
}

/** Bento category tiles: map display title to image path. */
export const bentoCategoryImages: Record<string, string> = {
  "Quadruped Robots": "/assets/Robodog_Go1_1-bb2e1c19-c68c-4cf1-94d7-e83b13b9f70a.png",
  "Humanoid Robots": "/assets/Humanoid_H1_1-b4b2bac0-3e58-47de-80fa-9922a8c63650.png",
  "Nimble Drones": "/assets/flapper-nimble-starter-kit_1-5184ce34-7ca4-41a9-80c1-0a9d99df7df1.png",
  "Service Robots": "/assets/Delivery_Robot__closed_type__1-0510831e-fe8c-4c44-a0a4-f407af5cf18b.png",
  "AMRs & Chassis": "/assets/Base_Chassis_1-f264e3cb-555f-47cb-8d02-d61ac3010a19.png",
  "Industrial Arms": "/assets/Robotic_Arm__RM75-B-7ad7eea1-b0e6-488d-bc5a-4c45e11c5b09.png",
  "Educational": "/assets/Humanoid_G1__BaseEDU__1-6fdb27f5-8fa2-4d56-83ea-306562e14bf5.png",
  "Accessories": "/assets/Camera__D435C-6fbb91be-4251-4c3e-90a7-2c76ce4409f7.png",
};
