export interface EntityUser {
  personId: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  dateOfBirth: string;
  institutionId: number;
  matchingScore: number;
  match: boolean;
}
