import { useEffect, useState } from "react";
import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import GamePage from "./pages/GamePage"


function App() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [name, setName] = useState("")

  useEffect(() => {
    if (user) {
      setName(user.fullName);
      console.log(user.fullName);
    }
  }, [user]);
  
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
    </>
  );
}
export default App;