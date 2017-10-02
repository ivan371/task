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

export function projectMembersNormalize(projectMembers) {
    const user = new schema.Entity('user');
    const projectMember = new schema.Entity('projectMember', {
        'user': user,
    });
    return normalize(projectMembers, [projectMember]);
}
export function projectMemberNormalize(projectMembers) {
    const user = new schema.Entity('user');
    const projectMember = new schema.Entity('projectMember', {
        'user': user,
    });
    return normalize(projectMembers, projectMember);
}