"use client";

import SampleEvent from "@/components/SampleEvent";
import AppBar from "../components/AppBar";
import NostrFunctionsDisplay from "@/components/NostrFunctionsDisplay";

export default function Home() {
  return (
    <>
      <AppBar />
      <main>
        <div id="header">
          <h1>NIP-07 Tester</h1>
        </div>

        <SampleEvent />
        <NostrFunctionsDisplay />
      </main>
    </>
  );
}
