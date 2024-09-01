import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton, SignInButton, SignOutButton, } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () =>{
    return (
        <header className="h-20 w-full border-b-2  border-blue-900 border-opacity-35 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                    <h1 className="text-2xl font-extrabold text-sky-400 tracking-wide">Signify</h1>
                </div>

                <div className="hidden lg:block">
                    
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin'></Loader>
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton>
                        </UserButton>
                        <SignOutButton >
                            <Button size="lg" variant="secondary" className='w-[100px] h-[40px] p-4 ml-4'>
                                Sign Out
                            </Button>
                        </SignOutButton>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="redirect" signUpFallbackRedirectUrl={"/learn"}>
                            <Button size="lg" variant="primary" className='w-[60px] h-[40px]'>
                            Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
                </div>

                
            </div>
            
        </header>
    );
};