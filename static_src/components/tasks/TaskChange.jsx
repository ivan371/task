import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {taskChange} from '../../actions/tasks';
import {openModal} from '../../actions/users';

class ProjectChangeComponent extends React.Component {
    state = {
        text: this.props.text,
        description: this.props.description,
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    onCreate = (e) => {
        this.props.taskChange('/api/tasks/' + this.props.id + '/', this.state.text, this.state.description, this.props.project_id);
    };
    onOpen = (e) => {
        this.props.openModal(!this.props.isOpen);
    };
    render() {
        return <div>
            <h3>
                <input
                    value={ this.state.text }
                    name="text"
                    onChange={ this.onChange }
                />
                <br/>
                <br/>
                <textarea
                    value={ this.state.description }
                    name="description"
                    onChange={ this.onChange }
                />
                <br/>
                <button onClick={ this.onCreate}>Изменить</button>
            </h3>
        </div>;
    }
}


ProjectChangeComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    text: state.tasks.tasks[props.id].text,
    description: state.tasks.tasks[props.id].description,
    project_id: state.tasks.tasks[props.id].project,
    isOpen: state.users.isModalOpen,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            taskChange,
            openModal,

        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectChangeComponent);