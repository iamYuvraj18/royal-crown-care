import { site } from "@/content/site";

export default function AnnouncementBar() {
  if (!site.announcement.enabled || !site.announcement.text) return null;
  return <div className="bg-neem px-4 py-2 text-center text-sm text-ivory">{site.announcement.text}</div>;
}
