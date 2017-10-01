import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ownTaskFetchData, projectFetchDate} from '../../actions/tasks';
import TaskPage from './TaskPage';

class OwnProjectComponent extends React.Component {
    componentDidMount() {
        this.props.ownTaskFetchData('/api/tasks/' + this.props.match.params.id + '/');
    }

    render() {
        let task = null;
        if (this.props.isLoading) {
            task = <TaskPage id={parseInt(this.props.match.params.id)}/>;
        }
        return <div className="title">
            <div className="content-block">
                {!this.props.isLoading ? <div className="loading"/> : task}
            </div>
        </div>;
    }
}


OwnProjectComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.tasks.isTaskLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            ownTaskFetchData
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(OwnProjectComponent);