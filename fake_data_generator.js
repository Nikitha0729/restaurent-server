import { faker } from "@faker-js/faker";
import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://vinitha:6nEye3eS1xaCOyvI@cluster0.28ve347.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function generateAndInsertFakeData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("vinitha");
    const collection = db.collection("dishes");

    const records = [];
    const numRecords = 15;

    for (let i = 0; i < numRecords; i++) {
      const dish = {
        _id: new ObjectId(),
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        vegetarian: faker.datatype.boolean(),
        image: faker.image.urlLoremFlickr({ category: "food" }),
        price: faker.commerce.price(),
        ingredients: [
          faker.lorem.word(),
          faker.lorem.word(),
          faker.lorem.word(),
        ].toString(),
        available: faker.datatype.boolean(),
        rating: faker.number.int({
          min: 1,
          max: 5,
        }),
      };

      records.push(dish);
    }

    await collection.insertMany(records);
    console.log(`Inserted ${numRecords} records into the collection`);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

generateAndInsertFakeData();
