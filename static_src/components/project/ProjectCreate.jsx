import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectCreate, projectMemberCreate} from '../../actions/project';
import {projectUrl} from '../../constants';

class ProjectCreateComponent extends React.Component {

    state = {
        name: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCreate = (e) => {
        this.props.projectCreate(projectUrl, this.state.name);
    };

    render() {
        return <div className="flex-block create">
            <p>Название</p>
            <input name="name" onChange={this.onChange}/>
            <br/>
            <button onClick={this.onCreate} >Создать</button>
        </div>;
    }
}

ProjectCreateComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectCreate,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectCreateComponent);