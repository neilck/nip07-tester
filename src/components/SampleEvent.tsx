import React from "react";

const sampleEventData = `{
"id": "",
"pubkey": "replace_with_pubkey_in_hex",
"created_at": 1680000000,
"kind": 1,
"tags": [],
"content": "Test kind 1 message.",
"sig": ""
}`;

const SampleEvent: React.FC = () => {
  return (
    <div className="border p-2">
      <p>
        <i>sample event to copy</i>
      </p>
      <input
        className="px-2 py-1 border border-gray-300 rounded w-full"
        defaultValue={sampleEventData}
      />
    </div>
  );
};

export default SampleEvent;
