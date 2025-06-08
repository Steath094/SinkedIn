import client from '@/lib/index'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from "next/server"
export async function POST (req: NextRequest){
    const body = await req.json()
    console.log(body);
    
    try {
        const password =await bcrypt.hash(body.password,10)
        const user = await client.user.create({
            data:{
                name: body.name,
                email: body.email,
                password
            }
        })
        if (!user) {
            return NextResponse.json({data: null,error: "Error while creating user"},{status: 401})
        }
        return NextResponse.json({ message: "User created", user },{status: 200})
    } catch (error:any) {
        console.log(error);
        
         if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}