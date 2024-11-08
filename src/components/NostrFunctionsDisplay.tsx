import React, { useState, useEffect } from "react";

import FunctionChecker from "./FunctionChecker";

const NostrFunctionsDisplay: React.FC = () => {
  const [nostr, setNostr] = useState(false);

  useEffect(() => {
    const test = window.nostr != null && window.nostr != undefined;
    if (nostr != test) {
      setNostr(test);
    }
  }, []);

  return (
    <>
      {!nostr && (
        <div className="w-full  border-4 mt-4">
          <h3>Signing extension (window.nostr) not found.</h3>
          <p>Please enable an extension and refresh this page.</p>
        </div>
      )}
      {nostr && (
        <div>
          <div className="w-full  border-4 mt-4">
            <h2 className="pl-4 pt-2">NIP07</h2>
            <FunctionChecker
              fn={window.nostr?.getPublicKey}
              functionName="getPublicKey"
              parameterCount={0}
            />

            <FunctionChecker
              fn={window.nostr?.signEvent}
              functionName="signEvent"
              parameterCount={1}
            />

            <FunctionChecker
              fn={window.nostr?.getRelays}
              functionName="getRelays"
              parameterCount={0}
            />
            <FunctionChecker
              fn={window.nostr?.nip04?.encrypt}
              functionName="nip04.encrypt"
              parameterCount={2}
            />
            <FunctionChecker
              fn={window.nostr?.nip04?.decrypt}
              functionName="nip04.decrypt"
              parameterCount={2}
            />
            <FunctionChecker
              fn={window.nostr?.nip44?.encrypt}
              functionName="nip44.encrypt"
              parameterCount={2}
            />
            <FunctionChecker
              fn={window.nostr?.nip44?.decrypt}
              functionName="nip44.decrypt"
              parameterCount={2}
            />
          </div>
          <div className="w-full  border-4 mt-4">
            <h2 className="pl-4 pt-2">Experimental</h2>

            <FunctionChecker
              fn={window.nostr?.getSharedPublicKeys}
              functionName="getSharedPublicKeys"
              parameterCount={0}
            />

            <FunctionChecker
              fn={window.nostr?.signEventWithPubkey}
              functionName="signEventWithPubkey"
              parameterCount={2}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NostrFunctionsDisplay;
