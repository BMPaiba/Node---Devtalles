import { findHeroById } from "./services/hero.services";

const hero = findHeroById(5);

console.log(hero?.name ?? "not hero found");
