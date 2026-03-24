import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["mn", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "mn";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const locale =
    localeCookie && locales.includes(localeCookie as Locale)
      ? (localeCookie as Locale)
      : defaultLocale;

  return {
    locale,
    messages: (await import(`../public/locales/${locale}/common.json`)).default,
  };
});
