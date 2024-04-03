import { fakerPT_BR } from "@faker-js/faker";

export const attendees = Array.from({ length: 222 }).map(() => {
  return {
    id: fakerPT_BR.number.int({ min: 10000, max: 20000 }),
    name: fakerPT_BR.person.fullName(),
    email: fakerPT_BR.internet.email().toLocaleLowerCase(),
    createdAt: fakerPT_BR.date.recent({ days: 30 }),
    checkedInAt: fakerPT_BR.date.recent({ days: 7 }),
  };
});
