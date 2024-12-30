'use client'
import { useClerk } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';

export default function SignOutBtn() {
    const { signOut } = useClerk();
    return (
      <Button
      variant="destructive"
        onClick={() => signOut({ redirectUrl: "/" })}
      >
        Logout
      </Button>
    );
  }
  