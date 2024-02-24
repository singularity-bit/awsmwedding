import { getInvitationId, getInvitationsIds } from "@/app/lib/invitations";
import Carousel from "@/app/components/Carousel";
import { notFound } from "next/navigation";


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

