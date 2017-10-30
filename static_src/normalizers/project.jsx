import { normalize, schema } from 'normalizr';

export function projectsNormalize (projects, count) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    let result = normalize(projects, [project]);
    result.count = count;
    return result;
}

export function projectNormalize (projects) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    return normalize(projects, project);
}

export function projectMembersNormalize(projectMembers, count) {
    const user = new schema.Entity('user');
    const projectMember = new schema.Entity('projectMember', {
        'user': user,
    });
    let result = normalize(projectMembers, [projectMember]);
    result.count = count;
    return result;
}
export function projectMemberNormalize(projectMembers) {
    const user = new schema.Entity('user');
    const projectMember = new schema.Entity('projectMember', {
        'user': user,
    });
    return normalize(projectMembers, projectMember);
}