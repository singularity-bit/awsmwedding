import { confirmInvitation } from "@/app/lib/invitations"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json()
        if (data?.id) {
            const confirmed = await confirmInvitation(data.id)
            revalidatePath(`/invitations/${data.id}/page`, 'page')
            return NextResponse.json({ confirmed })
        } else {
            return NextResponse.json({ confirmed: false })
        }

    } catch (error) {
        throw error
    }

}