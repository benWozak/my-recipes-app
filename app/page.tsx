'use client'
import React from 'react'
import {
  Box,
  Input,
  AbsoluteCenter,
  Button,
  UnorderedList,
  Tag,
  TagLabel,
  Checkbox,
  CheckboxGroup,
  Stack,
  TagCloseButton,
  OrderedList,
  ListItem,
  Center,
} from '@chakra-ui/react'
import axios from 'axios'
import RecipeCard from '@/components/recipe/RecipeCard'

export default function Home() {
  const [url, setUrl] = React.useState<string>()
  const [results, setResults] = React.useState<any>()

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  async function handleParseURLData() {
    const response = await axios.post('/api/recipes', { url })

    setResults(response.data)
    console.log(response.data)
  }

  return (
    <main>
      <Box position="relative" h="100vh">
        <Center h="100px">
          <Input
            width="30rem"
            placeholder="Enter a Recipe URL"
            onChange={handleURLChange}
            value={url}
          />
          <Button colorScheme="blue" onClick={handleParseURLData}>
            Get Recipe
          </Button>
        </Center>
        <br />
        {!!results ? (
          <AbsoluteCenter
            p="4"
            color="white"
            axis="both"
            width="50rem"
            maxHeight="50rem"
            overflowY='hidden'
          >
            <RecipeCard recipe={results} />
          </AbsoluteCenter>
        ) : null}
      </Box>
    </main>
  )
}
