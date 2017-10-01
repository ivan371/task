import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {commentCreate} from '../../actions/comments';

class CommentCreateComponent extends React.Component {

    state = {
        text: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCreate = (e) => {
        this.props.commentCreate('/api/comment/', this.state.text, this.props.id);
        this.setState({name: ''});
    };

    render() {
        return <div className="flex-block create">
            <p>Новый комментарий</p>
            <input name="text" onChange={this.onChange}/>
            <br/>
            <button onClick={this.onCreate} >Создать</button>
        </div>;
    }
}

CommentCreateComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            commentCreate,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(CommentCreateComponent);