import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectFetchDate, taskMoreFetchData} from '../../actions/tasks';
import Task from './../tasks/Task';
import TaskCreate from './../tasks/TaskCreate';
import ProjectPage from './ProjectPage';
import {taskSort, taskUrl, count, page, absoluteUrl, projectMemberUrl} from '../../constants';
import ProjectMembers from './ProjectMembers';
import Modal from '../Modal';
import MembersAdd from './MembersAdd';
import ProjectChange from './ProjectChange';
import {projectMembersFetchData} from '../../actions/project';

class OwnProjectComponent extends React.Component {
    static defaultProps = {
        addToPromises: () => {}
    };
    constructor(props){
        super(props);
        if( SERVER ){
            this.props.addToPromises(this.props.projectFetchDate(taskUrl + taskSort + this.props.match.params.id));
            this.props.addToPromises(this.props.projectMembersFetchData(projectMemberUrl + this.props.match.params.id));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering) {
            this.props.projectFetchDate(taskUrl + taskSort + this.props.match.params.id);
            this.props.addToPromises(this.props.projectMembersFetchData(projectMemberUrl + this.props.match.params.id));
        }
    }
    onLoadMore = (e) => {
        this.props.taskMoreFetchData(taskUrl + taskSort + this.props.match.params.id + '&' + page + this.props.page);
    };
    render() {
        let taskList = [];
        let project = null;
        let modal = null;
        if (this.props.isLoading) {
            taskList = this.props.taskList.map(
                (taskId) => {
                    return <Task key={ taskId } id={ taskId } />
                }
            );
            project = <ProjectPage id={parseInt(this.props.match.params.id)}/>;
        }
        switch (this.props.modal) {
            case "members":
                modal = <MembersAdd id={parseInt(this.props.match.params.id)}/>;
                break;
            case "change":
                modal = <ProjectChange id={parseInt(this.props.match.params.id)}/>;
                break;
        }

        return <div>
            <div className="title">
                {!this.props.isLoading ? null : project}
            </div>
            <div className="flex-container">
                { !this.props.isLoading ?  null : <ProjectMembers
                    id={parseInt(this.props.match.params.id)}
                /> }
                { !this.props.isLoading ?  null : <TaskCreate id={parseInt(this.props.match.params.id)}/> }
                { !this.props.isLoading ? <div className="loading"/> :  taskList }
                { this.props.isLoading && this.props.count > (count * (this.props.page - 1)) ? <div className="flex-block">
                    <button onClick={this.onLoadMore}>Показать еще</button>
                </div> : null }
            </div>
            <Modal>
                {modal}
            </Modal>
        </div>;
    }
}


OwnProjectComponent.propTypes = {
    addToPromises: React.PropTypes.func,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.tasks.isLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
    count: state.tasks.count,
    page: state.tasks.page,
    modal: state.users.modalValue,
    isServerRendering: state.SSR.serverRendering,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectFetchDate,
            taskMoreFetchData,
            projectMembersFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(OwnProjectComponent);