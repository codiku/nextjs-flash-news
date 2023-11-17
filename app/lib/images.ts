import { ArticleCategory } from "@/app/types/article-type";
import { CATEGORIES_ITEMS } from "@/constant";

export const findImgByCat = (cat: ArticleCategory) => CATEGORIES_ITEMS[cat].src;
