// "use client"

import styles from "./page.module.css";
import Charts from "@/components/Charts";
import SignOutButton from "@/components/SignOutButton";
import { currentUser } from "@clerk/nextjs";

const getData = async () => {
  try {
    const analyticsResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbzCZBl87rxGi9t7hffrohlcfHU4j3lOc6KofAN_Seg133yjmKvV2G44otnQsRKhJOc7Uw/exec"
    );

    console.log(analyticsResponse); // Log the entire response

    if (!analyticsResponse.ok) {
      console.log("Data fetching failed.");
      return null;
    }

    const responseBody = await analyticsResponse.arrayBuffer();
    const responseText = new TextDecoder().decode(responseBody);
    const jsonData = JSON.parse(responseText);

    console.log(jsonData);

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Home = async () => {
  const user = await currentUser();
  const analyticsData = await getData();

  if (analyticsData) {
    // Do something with the data, e.g., render it in your component
    console.log("Data received:", analyticsData);
  }

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <Charts data={analyticsData} />
      {/* Render your component content here */}
      {/* {user && <SignOutButton />} */}
    </main>
  );
};

export default Home;
