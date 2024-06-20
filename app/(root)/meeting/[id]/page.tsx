"use client";
import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { IoHome } from "react-icons/io5";
import { useRouter } from 'next/navigation'

const Meeting = ({ params: { id } }: { params: { id: string } }) => {

  const { isLoaded, user } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);
  const router = useRouter();
  if (!isLoaded || isCallLoading) {
    return <Loader />
  }
  return (
    <main className='h-screen w-full '>
      <StreamCall call={call}>
        <StreamTheme>
          <Button className='text-white flex items-center justify-center h-16 w-16 ' onClick={() => router.push('/')}><IoHome /></Button>
          {!isSetupComplete ? (<MeetingSetup setIsSetupComplete={setIsSetupComplete} />) : (<MeetingRoom />)
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
