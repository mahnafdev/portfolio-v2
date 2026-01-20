"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
	return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
