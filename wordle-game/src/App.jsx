import { useEffect, useState } from "react";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import GamePage from "./pages/GamePage";

function App() {
  const [info, setInfo] = useState("");
  const [signin, setSignin] = useState(false)
  const { user, isSignedIn } = useUser();
  // console.log(user.firstName);
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch("https://termle-server.vercel.app");
  //       const data = await response.json();
  //       setInfo(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);
console.log(isSignedIn);
useEffect(() => {
    if (isSignedIn){
    async function insertUserID() {
      try {
        const response = await fetch(
          `https://termle-server.vercel.app/addplayer/${user.id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
              name: user.fullName,
              wins: 0,
              attempts: 0,
            }),
          }
        );
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    insertUserID();
  }
  }, [isSignedIn]);
// }

  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.id);
      console.log(user.fullName);
    }
  }, [user]);
  console.log(info);


  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className="btn btn-lg ">Register</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <GamePage username={user.id}></GamePage>
      </SignedIn>
    </>
  );
}
export default App;