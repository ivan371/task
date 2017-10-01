import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Comment from './Comment';
import CommentCreate from './CommentCreate';

class CommentListComponent extends React.Component {
    render() {
        let commentList = [];
        if (this.props.isLoading) {
            commentList = this.props.commentList.map(
                (commentId) => {
                    return <Comment key={commentId} id={commentId}/>
                }
            );
        }
        return <div className="flex-container">
            { !this.props.isLoading ? null :  <CommentCreate id={this.props.id}/> }
            { !this.props.isLoading ? <div className="loading"/> :  commentList }
        </div>;
    }
}

CommentListComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.comments.isLoading,
    comments: state.comments.comments,
    commentList: state.comments.commentList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(CommentListComponent);
