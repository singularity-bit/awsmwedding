import { getInvitationsIds, getIsConfirmed } from '@/app/lib/invitations'
import styles from '../../../components/styles.module.css'
import { notFound } from 'next/navigation'
export const dynamic = 'force-dynamic'

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const invitation = await getIsConfirmed(id)
    if (!invitation?.confirmed) {
        return notFound()
    }
    return <h1 className={styles.wrapper}>Mulțumim pentru confirmare 😍!</h1>
}
export async function generateStaticParams() {
    const invitations = await getInvitationsIds()
    return invitations?.map((invitation) => ({
        id: invitation.invitationId,
    }))
}
