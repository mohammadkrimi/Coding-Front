import { Faker, fa, base } from "@faker-js/faker";

const faker = new Faker({
  locale: [base, fa],
});

export function generateFaParagraph() {
  return faker.lorem.paragraph();
}