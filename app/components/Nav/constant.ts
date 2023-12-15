import { ArticleCategory } from "@/app/types/article-type";
import businessPng from "@/public/business.png";
import crimePng from "@/public/crime.png";
import domesticPng from "@/public/domestic.png";
import educationPng from "@/public/education.png";
import entertainmentPng from "@/public/entertainment.png";
import environmentPng from "@/public/environment.png";
import foodPng from "@/public/food.png";
import healthPng from "@/public/health.png";
import otherPng from "@/public/other.png";
import politicsPng from "@/public/politics.png";
import sciencePng from "@/public/science.png";
import sportsPng from "@/public/sports.png";
import technologyPng from "@/public/technology.png";
import topPng from "@/public/top.png";
import tourismPng from "@/public/tourism.png";
import worldPng from "@/public/world.png";
import { StaticImageData } from "next/image";

export const CATEGORIES_ITEMS: { [key in ArticleCategory]: CategoryItem } = {
  business: { src: businessPng, alt: "Business logo", category: "business" },

  entertainment: {
    src: entertainmentPng,
    alt: "Entertainment logo",
    category: "entertainment",
  },
  general: {
    src: worldPng,
    alt: "General logo",
    category: "general",
  },
  health: { src: healthPng, alt: "Health logo", category: "health" },
  science: { src: sciencePng, alt: "Science logo", category: "science" },
  sports: { src: sportsPng, alt: "Sport logo", category: "sports" },
  technology: {
    src: technologyPng,
    alt: "Technology logo",
    category: "technology",
  },
};

export const NAV_ITEMS = [
  CATEGORIES_ITEMS.business,
  CATEGORIES_ITEMS.general,
  CATEGORIES_ITEMS.technology,
  CATEGORIES_ITEMS.science,
];

interface CategoryItem {
  src: StaticImageData;
  alt: string;
  category: ArticleCategory;
}
