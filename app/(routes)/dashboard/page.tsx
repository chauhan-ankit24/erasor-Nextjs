"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function page() {
  return (
    <div>
      dashboard
      <Button><LogoutLink>Logout</LogoutLink></Button>
      
    </div>
  )
}

export default page
