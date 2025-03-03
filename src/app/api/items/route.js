import dbConnect from "@/lib/dbConnect"

 
export async function GET() {

   const data = await dbConnect("items").find().toArray()
  return Response.json(data)
}


export async function POST(req) {

    const postData = await req.json()

  return Response.json({ postData })
}

