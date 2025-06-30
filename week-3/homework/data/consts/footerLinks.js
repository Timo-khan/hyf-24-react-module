import { Facebook } from "@/public/svgs/Facebook";
import { Google } from "@/public/svgs/Google";
import { Instagram } from "@/public/svgs/Instagram";
import { LinkedIn } from "@/public/svgs/LinkedIn";
import { TikTok } from "@/public/svgs/TikTok";

export const FOOTER_LINKS = {
  SOCIAL_MEDIA: [
    {
      url: "https://facebook.com",
      icon: <Facebook />,
      title: "Facebook",
    },
    {
      url: "https://instagram.com",
      icon: <Instagram />,
      title: "Instagram",
    },
    {
      url: "https://linkedin.com",
      icon: <LinkedIn />,
      title: "LinkedIn",
    },
    {
      url: "https://tiktok.com",
      icon: <TikTok />,
      title: "Tiktok",
    },
    {
      url: "https://google.com",
      icon: <Google />,
      title: "On the streets at night",
    },
  ],
  PAGES: [
    {
      url: "/about_us",
      title: "About Us",
    },
    {
      url: "/destination",
      title: "Destination",
    },
    {
      url: "/nasa_collaboration",
      title: "NASA Collaboration",
    },
  ],
};
