import { getInvitationId, getInvitationsIds } from "@/app/lib/invitations";
import Carousel from "@/app/components/Carousel";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export const dynamic = 'force-dynamic'
export default async function Page({ params: { id } }: { params: { id: string } }) {
  const invitation = await getInvitationId(id)

  if (!invitation) {
    return notFound()
  }
  return (
    <Suspense fallback={<Loading />}>
      <Carousel data={invitation} />
    </Suspense>
  );
}
export async function generateStaticParams() {
  const invitations = await getInvitationsIds()
  return invitations?.map((invitation) => ({
    id: invitation.invitationId,
  }))
}

