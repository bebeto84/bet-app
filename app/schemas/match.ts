import { schema } from 'normalizr';
import { teamSchema } from './team';

export const matchSchema = new schema.Entity('matches', {
  homeTeam: teamSchema,
  awayTeam: teamSchema
});

export const matchesSchema = [matchSchema];
