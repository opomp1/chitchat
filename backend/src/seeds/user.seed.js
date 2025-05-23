import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emma.thompson@example.com",
    fullName: "Emma Thompson",
    password: "test1234",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "olivia.miller@example.com",
    fullName: "Olivia Miller",
    password: "test1234",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // {
  //   email: "sophia.davis@example.com",
  //   fullName: "Sophia Davis",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  // },
  // {
  //   email: "ava.wilson@example.com",
  //   fullName: "Ava Wilson",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   email: "isabella.brown@example.com",
  //   fullName: "Isabella Brown",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  // },
  // {
  //   email: "mia.johnson@example.com",
  //   fullName: "Mia Johnson",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
  // {
  //   email: "charlotte.williams@example.com",
  //   fullName: "Charlotte Williams",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  // },
  // {
  //   email: "amelia.garcia@example.com",
  //   fullName: "Amelia Garcia",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  // },

  // Male Users
  {
    email: "james.anderson@example.com",
    fullName: "James Anderson",
    password: "test1234",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "test1234",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  // {
  //   email: "benjamin.taylor@example.com",
  //   fullName: "Benjamin Taylor",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  // },
  // {
  //   email: "lucas.moore@example.com",
  //   fullName: "Lucas Moore",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  // },
  // {
  //   email: "henry.jackson@example.com",
  //   fullName: "Henry Jackson",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   email: "alexander.martin@example.com",
  //   fullName: "Alexander Martin",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  // },
  // {
  //   email: "daniel.rodriguez@example.com",
  //   fullName: "Daniel Rodriguez",
  //   password: "test1234",
  //   profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  // },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
