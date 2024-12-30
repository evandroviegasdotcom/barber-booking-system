import { type SchemaTypeDefinition } from 'sanity'
import { barber } from './barber'
import { config } from './config'
import { user } from './user'
import { appointment } from './appointment'
import { services } from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [config, barber, user, appointment, services],
}
