import { confirmInvitation, getInvitationsIds } from '@/app/lib/invitations'
import styles from '../../../components/styles.module.css'
import { notFound } from 'next/navigation'
export default async function Page({ params: { id } }: { params: { id: string } }) {
    const invitation = await confirmInvitation(id)
    if (!invitation) {
        return notFound()
    }
    return <h1 className={styles.wrapper}>Multumim pentru confirmare 😍!</h1>
}
export async function generateStaticParams() {
    const invitations = await getInvitationsIds()
    return invitations?.map((invitation) => ({
        id: invitation.invitationId,
    }))
}