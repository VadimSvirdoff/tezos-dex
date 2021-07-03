import React, { useState } from "react";
import { Button, Divider, VStack } from "@chakra-ui/react";

import { useReady, useConnect, useAccountPkh } from "../hooks/useDApp";
import { AccountInfo } from "../components/AccountInfo";


const DEFAULT_CONTRACT_ADDRESS = "KT1R2DVgCq978oc3B39yFA9YNq6K4PYQeKXg";
// const DEFAULT_NETWORK = "edo2net"; // backup network, in case that one goes down: { rpc: "https://edonet.smartpy.io/", name: "edo2net" }

export function Dashboard() {
  const ready = useReady();
  const connect = useConnect();
  const pkh = useAccountPkh();

  const handleConnect = React.useCallback(async () => {
    try {
      await connect(
        {
          rpc: "https://edonet.smartpy.io",
          name: "edo2net",
        },
        { forcePermission: true }
      );
    } catch (e) {
      alert(e.message);
    }
  }, [connect]);

  const [contractAddress, setContractAddress] = useState<string>(
    DEFAULT_CONTRACT_ADDRESS
  );
  const [tokenId, setTokenId] = useState<string>("0");

  return (
    <VStack spacing="6" alignItems="flex-start">
      {!ready && !pkh ? (
        <Button colorScheme="teal" variant="outline" onClick={handleConnect}>
          Connect to Temple Wallet
        </Button>
      ) : (
        <>
          <AccountInfo account={pkh!} handleReconnect={handleConnect} />
          
        </>
      )}
    </VStack>
  );
}
