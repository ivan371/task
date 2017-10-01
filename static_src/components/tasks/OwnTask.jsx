import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ownTaskFetchData, projectFetchDate} from '../../actions/tasks';
import TaskPage from './TaskPage';
import {commentsFetchData} from '../../actions/comments';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';

class OwnProjectComponent extends React.Component {
    componentDidMount() {
        this.props.ownTaskFetchData('/api/tasks/' + this.props.match.params.id + '/');
        this.props.commentsFetchData('/api/comment/?task=' + this.props.match.params.id);
    }

    render() {
        let task = null;
        if (this.props.isLoading) {
            task = <TaskPage id={parseInt(this.props.match.params.id)}/>;
        }
        return <div>
            <div className="title">
                <div className="content-block">
                    {!this.props.isLoading ? <div className="loading"/> : task}
                </div>
            </div>
            <CommentList id={parseInt(this.props.match.params.id)}/>
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
            ownTaskFetchData,
            commentsFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(OwnProjectComponent);