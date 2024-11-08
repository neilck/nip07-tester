"use client";

import AppBar from "../components/AppBar";
import NostrFunctionsDisplay from "@/components/NostrFunctionsDisplay";

export default function Home() {
  return (
    <>
      <AppBar />
      <main>
        <div id="header">
          <h1>NIP07 Tester</h1>
        </div>

        <NostrFunctionsDisplay />
      </main>
    </>
  );
}
