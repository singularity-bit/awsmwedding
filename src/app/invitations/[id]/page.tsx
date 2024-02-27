import { getInvitationId, getInvitationsIds } from "@/app/lib/invitations";
import { notFound } from "next/navigation";
import Carousel from "../../components/Carousel";

export const dynamic = 'force-dynamic'
export default async function Page({ params: { id } }: { params: { id: string } }) {
  const invitation = await getInvitationId(id)

  if (!invitation) {
    return notFound()
  }
  return (
    <Carousel data={invitation} />
  );
}
export async function generateStaticParams() {
  const invitations = await getInvitationsIds()
  return invitations?.map((invitation) => ({
    id: invitation.invitationId,
  }))
}

