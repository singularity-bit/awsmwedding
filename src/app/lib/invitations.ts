
import clientPromise from "./mongodb";
export interface Invitation {
  invitationId: string;
  confirmed?: boolean,
  persons: {
    name: string,
  }[]
}
export async function getInvitationsIds() {
  const client = await clientPromise()

  try {
    const db = client.db('wedding')
    const invitations = await db
      ?.collection<Invitation>("invitations")
      .find()
      .toArray();
    return invitations

  } catch (error) {
    throw error
  } finally {
    await client.close()
  }
}
export async function getInvitationId(id: string) {
  const client = await clientPromise()

  try {
    const db = client.db('wedding')
    const invitations = await db
      ?.collection<Invitation>("invitations")
      .findOne<Invitation>({ invitationId: id })

    return invitations

  } catch (error) {
    throw error
  } finally {
    await client.close()
  }
}
export async function confirmInvitation(id: string) {
  const client = await clientPromise()

  try {
    const db = client.db('wedding')
    const invitation = await db
      ?.collection<Invitation>("invitations")
      .updateOne({ invitationId: id }, { $set: { confirmed: true } })

    return invitation?.matchedCount > 0


  } catch (error) {
    throw error
  } finally {
    await client.close()
  }
}
export async function getIsConfirmed(id: string) {
  const client = await clientPromise()

  try {
    const db = client.db('wedding')
    const invitation = await db
      ?.collection<Invitation>("invitations")
      .findOne({ invitationId: id, confirmed: true })

    return invitation


  } catch (error) {
    throw error
  } finally {
    await client.close()
  }
}