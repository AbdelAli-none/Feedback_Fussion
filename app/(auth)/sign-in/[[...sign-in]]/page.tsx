"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();
  return (
    <div className="flex min-h-screen justify-center">
      <SignIn appearance={{ theme: theme === "dark" ? dark : undefined }} />
    </div>
  );
}
