import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  Tag,
  TagLabel, HStack,
  CheckboxGroup,
  Checkbox,
  OrderedList,
  ListItem,
  Image,
  Center,
  Divider,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import moment from 'moment'

interface Props {
  recipe: any
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Card maxHeight="50rem">
      <CardHeader>
        <Heading size="md">{recipe.name}</Heading>
      </CardHeader>
      <CardBody maxHeight="40rem" overflowY='scroll'>
        <Center>
          <Image src={recipe.image[0]} alt='Meal' boxSize='20rem' objectFit='cover' />
        </Center>
      
        <Stack divider={<StackDivider />} spacing="3">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <HStack divider={<StackDivider />}>
            {!!recipe.recipeCategory && recipe.recipeCategory.map((item: string, index: number) => (
                        <Tag
                          key={index}
                          borderRadius="full"
                          variant="subtle"
                          colorScheme="cyan"
                        >
                          <TagLabel>{item}</TagLabel>
                        </Tag>
                      ))}
                      {!!recipe.recipeCuisine && recipe.recipeCuisine.map((item: string, index: number) => (
                        <Tag
                          key={index}
                          borderRadius="full"
                          variant="subtle"
                          colorScheme="cyan"
                        >
                          <TagLabel>{item}</TagLabel>
                        </Tag>
                      ))}
            </HStack>
            <HStack divider={<StackDivider />}>
              <strong>Yields</strong>
                      {!!recipe.recipeYield && recipe.recipeYield.map((item: string, index: number) => (
                        <Tag
                          key={index}
                          borderRadius="full"
                          variant="subtle"
                          colorScheme="cyan"
                        >
                          <TagLabel>{item}</TagLabel>
                        </Tag>
                      ))}
            </HStack>
            <HStack divider={<StackDivider />}>
              <Text><strong>Prep Time: </strong>{`${moment.duration(recipe.prepTime).asMinutes()}min`}</Text>
              <Text><strong>Cook Time: </strong>{`${moment.duration(recipe.cookTime).asMinutes()}min`}</Text>
              <Text><strong>Total Time: </strong>{`${moment.duration(recipe.totalTime).asMinutes()}min`}</Text>
            </HStack>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Ingredients
            </Heading>
            <CheckboxGroup colorScheme="green">
                        <Stack spacing={[1, 5]} direction="column">
                          {!!recipe.recipeIngredient &&
                            recipe.recipeIngredient.map(
                              (item: string, index: number) => {
                                return (
                                  <Checkbox key={index} value={item}>
                                    {item}
                                  </Checkbox>
                                )
                              }
                            )}
                        </Stack>
                      </CheckboxGroup>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
            Instructions
            </Heading>
                      <OrderedList spacing={3}>
                        {recipe.recipeInstructions.map(
                          (
                            item: {
                              ['@type']: string
                              name: string
                              text: string
                              url: string
                            },
                            index: number
                          ) => {
                            return <ListItem key={index}>{item.text}</ListItem>
                          }
                        )}
                      </OrderedList>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Report issue
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Save Recipe
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
