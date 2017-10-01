import { normalize, schema } from 'normalizr';

export function commentsNormalize (comments) {
    const user = new schema.Entity('user');
    const comment = new schema.Entity('comment', {
        'author': user,
    });
    return normalize(comments, [comment]);
}

export function commentNormalize (comments) {
    const user = new schema.Entity('user');
    const comment = new schema.Entity('comment', {
        'author': user,
    });
    return normalize(comments, comment);
}
