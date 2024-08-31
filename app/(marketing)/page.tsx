import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Loader} from "lucide-react";
import { ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import Link  from 'next/link';

export default function Home() {
  return(
  <div className ="max-w-[988px] mx-auto flex-1 w-full justify-center p-4 gap-2">
   <div className="relative w-[240px] h-[540px] lg:w-auto lg:h-[auto] mb-8 lg:mb-0">
   <div className ="flex flex-col items-center gap-y-8">
    <h1 className ="text-xl lg:text-3xl front-bold text-neutral-600 max-w-[480px] text-center pt-60">
      Learn,practice and master new Languages with Lingo.
    </h1>
    <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
      <SignUpButton mode="modal" >
            <Button size="lg"variant="secondary" className="w-full">
                Get Started
            </Button>     
      </SignUpButton>
    <SignInButton mode="modal" >
        <Button size="lg" variant="primaryOutline" className="w-full">
            I already have an account
        </Button>      
    </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size="lg" variant="secondary" className="w-full flex justify-center">
          <Link href="/learn" className="h-auto">
          Continue Learning
          </Link>
        </Button>
      </SignedIn>
      </ClerkLoaded>
    </div>
   </div>
  </div>
  </div>
  )
}