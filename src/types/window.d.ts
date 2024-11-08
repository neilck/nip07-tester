// window.d.ts
declare global {
  interface Window {
    nostr: {
      _requests: Record<string, any>;
      _pubkey: string | null;
      getPublicKey: () => Promise<string | null>;
      getSharedPublicKeys: () => Promise<any>;
      signEvent: (event: any) => Promise<any>;
      signEventWithPubkey: (pubkey: string, event: any) => Promise<any>;
      getRelays: () => Promise<any>;
      nip04: {
        encrypt: (peer: string, plaintext: string) => Promise<any>;
        decrypt: (peer: string, ciphertext: string) => Promise<any>;
      };
      nip44: {
        encrypt: (peer: string, plaintext: string) => Promise<any>;
        decrypt: (peer: string, ciphertext: string) => Promise<any>;
      };

      // Account change event support
      _accountChangedListeners: Array<() => void> | null;
      on: (name: "accountChanged", listener: () => void) => void;
      off: (name: "accountChanged", listener: () => void) => void;
    };
  }
}

// This ensures that the declaration is global and automatically applied across your app.
export {};
