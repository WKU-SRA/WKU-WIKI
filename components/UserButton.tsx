import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
  ClerkLoading,
  ClerkLoaded,
} from '@clerk/nextjs'
import { UserIcon } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export default async function User() {
  return (
    <>
      <ClerkLoading>
        <Skeleton className="rounded-full p-1">
          <UserIcon className="text-blue-300" />
        </Skeleton>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignInButton>
            <UserIcon className="hover:text-primary-500" />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkLoaded>
    </>
  )
}
