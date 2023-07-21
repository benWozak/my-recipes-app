import { NextResponse, type NextRequest } from 'next/server'
import * as cheerio from 'cheerio'

export async function POST(request: NextRequest) {
  const res = await request.json()
  const html = await fetch(res.url).then((x) => x.text())
  const $ = cheerio.load(html)

  //@ts-ignore
  const jsonRaw = $("script[type='application/ld+json']")[0].children[0].data
  const recipeData = JSON.parse(jsonRaw)

  let result = {}
  if (recipeData.hasOwnProperty('@graph')) {
    // console.log(recipeData['@graph'].find((item: any) => item['@type'] === 'Recipe'))
    result = recipeData['@graph'].find(
      (item: any) => item['@type'] === 'Recipe'
    )

    return NextResponse.json(result)
  } else {
    return NextResponse.json({ error: 'No Dice' })
  }
}
