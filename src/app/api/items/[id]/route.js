import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req,{params}) {

    const p = await params;
    const singleData = await dbConnect('items').findOne({_id : new ObjectId(p.id)})


  return Response.json(singleData)
}


export async function DELETE(req,{params}) {

    const p = await params;
    const singleDataDelete = await dbConnect('items').deleteOne({_id : new ObjectId(p.id)})

  return Response.json(singleDataDelete)
}
export async function PATCH(req,{params}) {

    const p = await params;
    console.log(p);

    const data = {
        message : "Success",
        error: false,
        status: 200
    }

  return Response.json({ data,p })
}
