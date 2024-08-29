import Image from 'next/image'

import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

import logo from '@/public/icontest.svg'

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-5 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={logo} height={40} width={40} alt="Logo" className='h-[40px] w-[40px]'></Image>
                    <h1 className='text-2xl font-extrabold text-purple-600 tracking-wide'>
                        Lingo
                    </h1>
                </div>

                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin'></Loader>
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton>
                        </UserButton>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal" forceRedirectUrl="/learn" signUpForceRedirectUrl="/learn">
                            <Button size="lg" variant="ghost" className='w-[60px] h-[40px]'>
                            Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};