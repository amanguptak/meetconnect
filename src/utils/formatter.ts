import { Participant, User } from "../../types/storetype";

export const createParticipantFromUser = (user: User): Participant => ({
  userId: user.id,
  micOn: true,
  videoOn: true,
});