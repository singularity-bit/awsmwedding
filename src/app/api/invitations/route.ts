import { confirmInvitation } from "@/app/lib/invitations"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json()
        if (data?.id) {
            const confirmed = await confirmInvitation(data.id)
            return NextResponse.json({ confirmed })
        } else {
            return NextResponse.json({ confirmed: false })
        }

    } catch (error) {
        throw error
    }

}