import { normalize, schema } from 'normalizr';

export function tasksNormalize (tasks, count) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    const task = new schema.Entity('task', {
        'author': user,
        'assign_to': user,
        'project': project,
    });
    let result = normalize(tasks, [task]);
    result.count = count;
    return result;
}

export function taskNormalize (tasks) {
    const user = new schema.Entity('user');
    const project = new schema.Entity('project', {
        'author': user,
    });
    const task = new schema.Entity('task', {
        'author': user,
        'assign_to': user,
        'project': project,
    });
    return normalize(tasks, task);
}
