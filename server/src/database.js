import mongoose from "mongoose";
import Wish from "./models/wish.js";

export async function connectDatabase() {
  const connectionString = process.env.MONGODB_URL;

  if (!connectionString) {
    throw new Error(
      "MONGODB_URL not set as environment variable. Please configure it in an .env file."
    );
  }

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function seedDatabase() {
  const wishCount = await Wish.countDocuments();

  if (wishCount === 0) {
    const defaultWishes = [
      {
        title: "I wish that I had a big house (I don't have a big house, but it's a nice idea!).",
        description: "large open plans with light wooden floors and floor-to-ceiling windows that beautifully welcome nature inside, white walls and bright kitchens kept in classic, simple style",
        link: "https://www.nybolig.dk/?gclid=EAIaIQobChMIk9y284fi9AIVh-lRCh1L2wwcEAAYASAAEgJbHvD_BwE",
        comments: ["Thats sound so good, i wish for that too", "Maybe for a rent apartment?"],
        creationDate: "2021-12-14",
        author: "Braden Darrel"
      },
      {
        title: "I wish that I could drive (I can't drive).",
        description: "Sommer curse, where it will be faster than noraml",
        link: "https://www.driverz.dk/korekort-bil/koreskole-aarhus/",
        creationDate: "2021-12-15",
        comments: ["I know a good driverlicens school near by me", "you can try to in skanderbrg"],
        author: "Dustin Zach"
      },
      {
        title: "I wish that we could go to the party tonight",
        description: "A place we can join each other's company, lots of music and drinks",
        link: "https://bernhardt-aarhus.dk/",
        creationDate: "2021-12-16",
        comments: ["Have you heard about Irish Pub in Aaarhus?", "Come and join at hornslet knightclub"],
        author: "Jannet"
      },
      {
        title: "I wish that i could buy new shoes.",
        description: "https://www.zalando.dk/herresko/",
        link: "www.google.dk",
        creationDate: "2021-12-17",
        comments: ["lol", "hahaha we already now", "try skoringen"],
        author: "Elissa Midge"
      }
    ]
    console.log("seeding database with %d wishes", defaultWishes.length);
    await Wish.insertMany(defaultWishes);
  } else {
    console.log("database already has content, not seeding")
  }
}

