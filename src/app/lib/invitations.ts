const vasea = [
  ['Mama',
    'Tata'],
  ['Iulia',
    'Marius'],
  'Bunica Iulia',
  ['Tolea',
    'Adelina'],
  ['Ion',
    'Adela'],
  'Nelu',
  ['Aurel',
    'marcica'],
  'Nicu',
  'Cristina',
  ['Marin',
    'antonel'],
  ['Nicolae',
    'aliona'],
  ['Tudor',
    'Eugenia'],
  ['Lilea',
    'Gheorghe'],
  ['Andrei',
    'Violeta'],
  'Vasea',
  ['Alexandru',
    'Zinaida'],
  'Tatiana',
  'Anatolie',
  ['Tatiana',
    'Bărbatul Tatianei'],
  ['Oleg',
    'Sotia lui oleg'],
  ['Ion',
    'Sotie'],
  ['Svetlana',
    'Vasile'],
  ['Victoria',
    'Ion'],
  ['Oleg',
    'Ina'],
  ['Vasile',
    'Ira']
]
import clientPromise from "./mongodb";
export interface Invitation {
  invitationId: string;
  confirmed?: boolean,
  persons: {
    name: string,
  }[]
}
export async function getInvitationsIds() {
  try {
    const client = await clientPromise
    const db = client.db("wedding")
    const invitations = await db
      .collection<Invitation>("invitations")
      .find()
      .toArray();
    return invitations

  } catch (error) {
    throw error
  }
}
export async function getInvitationId(id: string) {
  try {
    const client = await clientPromise
    const db = client.db("wedding")
    const invitations = await db
      .collection<Invitation>("invitations")
      .findOne<Invitation>({ invitationId: id })

    return invitations

  } catch (error) {
    throw error
  }
}
export async function confirmInvitation(id: string) {
  try {
    const client = await clientPromise
    const db = client.db("wedding")
    const invitation = await db
      .collection<Invitation>("invitations")
      .updateOne({ invitationId: id }, { $set: { confirmed: true } })

    return invitation.matchedCount > 0


  } catch (error) {
    throw error
  }
}