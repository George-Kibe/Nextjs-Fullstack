import Post from "@/models/Post";
import connect from "@/utils/db"
import { NextResponse } from "next/server";

async function handler(req,res){
    const {method} = req;
    await connect();
    if (method === "GET"){
        const url = new URL(req.url);
        const username = url.searchParams.get("username")
        try {
            await connect();
            const posts = await Post.find(username && {username});
            return new NextResponse(JSON.stringify(posts), {status:200})
        } catch (error) {
            return new NextResponse("Database Error", { status:500})
        }
    }    
    if (method === "POST"){
        const body = await req.json()
        const {title, description, image, content, username} = body;
        const newPost = new Post({
            title, description, image, content, username
        })
        console.log("New Post", newPost)
        try {
            await newPost.save();
            console.log("saved!")
            return new NextResponse("Post has been created", {status: 201})
        } catch (error) {
            console.log("Post saving error!")
            return new NextResponse(error.message, {status: 422})
        }      
    }
}

export { handler as GET, handler as POST };