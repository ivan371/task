import React from 'react';
import { bindActionCreators } from 'redux';
import {taskFetchData} from '../../actions/tasks';
import {connect} from 'react-redux';
import Task from './Task';

class TasksComponent extends React.Component {
    componentDidMount() {
        this.props.taskFetchData('/api/tasks');
    }
    render() {
        let taskList = [];
        if (this.props.isLoading) {
            taskList = this.props.taskList.map(
                (taskId) => {
                    return <Task key={ taskId } id={ taskId } />
                }
            );
        }
        return <div>
            <div className="flex-container">
                { !this.props.isLoading ? <div className="loading"/> :  taskList }
            </div>
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    isLoading: state.tasks.isLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            taskFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TasksComponent);
