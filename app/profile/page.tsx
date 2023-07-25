'use client'
import React from 'react'
import { useUser, withPageAuthRequired, WithPageAuthRequiredProps } from '@auth0/nextjs-auth0/client'
import { Center, VStack } from '@chakra-ui/react'

export default withPageAuthRequired<WithPageAuthRequiredProps>(function Profile({ user }) {
  const { error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    user && (
      <Center marginTop="2rem">
        <VStack>
          <img src={user.picture!} alt={user.name!} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </VStack>
      </Center>
    )
  )
})
