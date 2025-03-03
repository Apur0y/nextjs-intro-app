export async function GET(req,{params}) {



  return Response.json({ data,p })
}


export async function DELETE(req,{params}) {

    const p = await params;
    console.log(p);

    const data = {
        message : "Success",
        error: false,
        status: 200
    }

  return Response.json({ data,p })
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
