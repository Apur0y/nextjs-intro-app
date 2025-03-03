import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

 
export async function GET() {

   const data = await dbConnect("items").find().toArray()
  return Response.json(data)
}


export async function POST(req) {

    const postData = await req.json()
    const res = await dbConnect("items").insertOne(postData)
   revalidatePath("/items")
  return Response.json(res)
}

