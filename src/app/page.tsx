/**
 * @fileoverview Home route; Proxy also redirects `/` to `/articles`.
 */

import { redirect } from "next/navigation";
import { urls } from "@/shared/config/urls";

export default function HomePage() {
  redirect(urls.site.articles);
}
