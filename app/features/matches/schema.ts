import { schema } from 'normalizr';
import { teamSchema } from '../teams/schema';

export const matchSchema = new schema.Entity('matches', {
  homeTeam: teamSchema,
  awayTeam: teamSchema
});

export const matchesSchema = [matchSchema];
