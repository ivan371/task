import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {taskDelete} from '../../actions/tasks';
import {projectMembersFetchData} from '../../actions/project';

class MembersComponent extends React.Component {
    render() {
        let img = null;
        switch (this.props.role) {
            case 1:
                img = <img className="role" src="/static/img/master.png"/>;
                break;
            case 2:
                img = <img className="role" src="/static/img/developer.png"/>;
                break;
        }
        return <div>
            <p>{img} {this.props.first_name}  {this.props.last_name}</p>
        </div>;
    }
}

MembersComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    role: state.project.members[props.id].role,
    first_name: state.users.users[state.project.members[props.id].user].first_name,
    last_name: state.users.users[state.project.members[props.id].user].last_name,
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
)(MembersComponent);