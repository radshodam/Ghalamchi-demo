/**
 * @fileoverview Ghalamchi wordmark used in the site header.
 */

import Image from "next/image";
import { urls } from "@/shared/config/urls";

/**
 * Renders the official Ghalamchi logo with a cropped, header-friendly frame.
 *
 * @returns {JSX.Element} Accessible logo image.
 */
export function BrandLogo() {
  return (
    <div className="size-20 relative">
      <Image
        src={urls.assets.logo}
        alt="قلمچی"
        fill
        priority
        className="object-contain size-full"
      />
    </div>
  );
}
