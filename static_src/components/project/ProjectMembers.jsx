import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {taskDelete} from '../../actions/tasks';
import {projectMembersFetchData} from '../../actions/project';

class ProjectMembersComponent extends React.Component {
    componentDidMount() {
        this.props.projectMembersFetchData('/api/projectMember/?project=' + this.props.id);
    }
    render() {
        return <div className="flex-block">
            участники проекта
        </div>;
    }
}

ProjectMembersComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectMembersFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectMembersComponent);