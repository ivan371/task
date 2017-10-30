import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ownTaskFetchData, projectFetchDate} from '../../actions/tasks';
import TaskPage from './TaskPage';
import {commentsFetchData} from '../../actions/comments';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';
import {absoluteUrl} from '../../constants';

class OwnProjectComponent extends React.Component {
    static defaultProps = {
        addToPromises: () => {}
    };
    constructor(props){
        super(props);
        if( SERVER ){
            this.props.addToPromises(this.props.ownTaskFetchData(absoluteUrl + '/api/tasks/' + this.props.match.params.id + '/'));
            this.props.addToPromises(this.props.commentsFetchData(absoluteUrl + '/api/comment/?task=' + this.props.match.params.id));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering) {
            this.props.ownTaskFetchData('/api/tasks/' + this.props.match.params.id + '/');
            this.props.commentsFetchData('/api/comment/?task=' + this.props.match.params.id);
        }
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
    addToPromises: React.PropTypes.func,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.tasks.isTaskLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
    isServerRendering: state.SSR.serverRendering,
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