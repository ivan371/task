import { normalize, schema } from 'normalizr';

export function userNormalize (users) {
    const user = new schema.Entity('user');
    return normalize(users, user);
}