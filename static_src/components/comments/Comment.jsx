import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {commentDelete} from '../../actions/comments';

class CommentComponent extends React.Component {
    onDelete = (e) => {
        this.props.commentDelete("/api/comment/" + this.props.id + '/', this.props.id);
    };
    render() {
        return <div className="flex-block">
            {/*<img className="delete" src="/static/img/close.png" onClick={this.onDelete}/>*/}
            <h4>{this.props.text}</h4>
            <p>{this.props.created_at.substring(0, 10)}</p>
            <div className="user-short">{this.props.first_name} {this.props.last_name}</div>
        </div>;
    }
}

CommentComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    text: state.comments.comments[props.id].text,
    created_at: state.comments.comments[props.id].created_at,
    first_name: state.users.users[state.comments.comments[props.id].author].first_name,
    last_name: state.users.users[state.comments.comments[props.id].author].last_name,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            commentDelete,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(CommentComponent);