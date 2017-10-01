import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {taskCreate} from '../../actions/tasks';

class TaskCreateComponent extends React.Component {

    state = {
        text: '',
        description: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCreate = (e) => {
        this.props.taskCreate('/api/tasks/', this.state.text, this.state.description, this.props.id);
    };

    render() {
        return <div className="flex-block create">
            <p>Название</p>
            <input name="text" onChange={this.onChange}/>
            <p>Описание</p>
            <input name="description" onChange={this.onChange}/>
            <br/>
            <button onClick={this.onCreate} >Создать</button>
        </div>;
    }
}

TaskCreateComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            taskCreate,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TaskCreateComponent);