import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectFetchDate} from '../../actions/tasks';
import {openModal} from '../../actions/users';
import {projectChange} from '../../actions/project';

class ProjectChangeComponent extends React.Component {
    state = {
        name: this.props.name,
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    onCreate = (e) => {
        this.props.projectChange('/api/projects/' + this.props.id + '/', this.state.name);
    };
    render() {
        return <div>
                <input
                    value={ this.state.name }
                    name="name"
                    onChange={ this.onChange }
                />
                <br/>
                <button onClick={ this.onCreate}>Изменить</button>
        </div>;
    }
}


ProjectChangeComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    name: state.project.projects[props.id].name,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectChange,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectChangeComponent);