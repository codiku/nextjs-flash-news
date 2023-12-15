import businessPng from "@/public/business.png";
import entertainmentPng from "@/public/entertainment.png";
import healthPng from "@/public/health.png";
import sciencePng from "@/public/science.png";
import sportsPng from "@/public/sports.png";
import technologyPng from "@/public/technology.png";
import worldPng from "@/public/world.png";

export const CATEGORIES_ITEMS = {
  business: { src: businessPng, alt: "Business logo", category: "business" },

  entertainment: {
    src: entertainmentPng,
    alt: "Entertainment logo",
    category: "entertainment",
  },

  health: { src: healthPng, alt: "Health logo", category: "health" },
  science: { src: sciencePng, alt: "Science logo", category: "science" },
  sports: { src: sportsPng, alt: "Sport logo", category: "sports" },
  technology: {
    src: technologyPng,
    alt: "Technology logo",
    category: "technology",
  },

  general: { src: worldPng, alt: "General logo", category: "general" },
};
