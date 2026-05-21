export type BookCategory =
  | "Design & Product"
  | "Business & Strategy"
  | "Leadership"
  | "Personal Growth"
  | "Property & Finance"
  | "Faith & Life"

export const BOOK_CATEGORY_ORDER: BookCategory[] = [
  "Design & Product",
  "Business & Strategy",
  "Leadership",
  "Personal Growth",
  "Property & Finance",
  "Faith & Life",
]

export const bookCategoryById: Record<string, BookCategory> = {
  "lean-ux": "Design & Product",
  "design-of-everyday-things": "Design & Product",
  sprint: "Design & Product",
  "the-lean-startup": "Design & Product",
  "real-artists-dont-starve": "Design & Product",
  "the-art-of-the-start": "Design & Product",
  "think-remarkable": "Design & Product",
  "the-talent-code": "Design & Product",
  "zero-to-one": "Design & Product",
  "the-diary-of-a-ceo": "Design & Product",
  influence: "Design & Product",
  "good-to-great": "Business & Strategy",
  "great-by-choice": "Business & Strategy",
  "how-the-mighty-fall": "Business & Strategy",
  "no-rules-rules": "Business & Strategy",
  "start-with-why": "Business & Strategy",
  power: "Business & Strategy",
  "think-and-grow-rich": "Business & Strategy",
  "no-limits": "Leadership",
  "the-winning-attitude": "Leadership",
  "developing-the-leader-around-you": "Leadership",
  "becoming-a-person-of-influence": "Leadership",
  "21-irrefutable-laws-of-leadership": "Leadership",
  "thinking-for-a-change": "Leadership",
  "developing-the-leader-within-you": "Leadership",
  "atomic-habits": "Personal Growth",
  "i-thought-it-was-just-me": "Personal Growth",
  "men-are-from-mars-women-are-from-venus": "Personal Growth",
  "things-i-wish-id-known-before-we-got-married": "Personal Growth",
  "his-needs-her-needs": "Personal Growth",
  "changes-that-heal": "Personal Growth",
  "talking-to-strangers": "Personal Growth",
  "retire-rich-through-property": "Property & Finance",
  "the-billionaire-mindset": "Property & Finance",
  "making-money-out-of-property": "Property & Finance",
  "rediscovering-the-kingdom": "Faith & Life",
  "the-richest-man-who-ever-lived": "Faith & Life",
  "how-to-read-the-bible-for-all-its-worth": "Faith & Life",
}
