import { confirmInvitation } from "@/app/lib/invitations"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json()
        const path = req.nextUrl.searchParams.get('path')
        if (data?.id && path) {
            const confirmed = await confirmInvitation(data.id)
            revalidatePath(path, 'page')
            return NextResponse.json({ confirmed })
        } else {
            return NextResponse.json({ confirmed: false })
        }

    } catch (error) {
        throw error
    }

}