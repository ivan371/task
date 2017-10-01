import { normalize, schema } from 'normalizr';

export function projectsNormalize (projects) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    return normalize(projects, [project]);
}

export function projectNormalize (projects) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    return normalize(projects, project);
}
