import { useEffect, useState } from "react";
import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import GamePage from "./pages/GamePage"


function App() {
  const [info, setInfo] = useState("")
  useEffect(() => {
    async function getData() {
        try {
          const response = await fetch("http://localhost:3000");
          const data = await response.json();
          setInfo(data)
        } catch (error) {
          console.log(error);
      }
    }
    getData();
  }, []);
  const { user } = useUser();
  const [name, setName] = useState("")

  useEffect(() => {
    if (user) {
      setName(user.fullName);
      console.log(user.fullName);
    }
  }, [user]);
  console.log(info);
  return (
    <>
    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
      <GamePage username={name}>
      </GamePage>
        <UserButton />
      </SignedIn>
      {info}
    </>
  );
}
export default App;