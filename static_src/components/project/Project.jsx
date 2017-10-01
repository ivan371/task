import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectDelete} from '../../actions/project';

class ProjectComponent extends React.Component {
    onDelete = (e) => {
        this.props.projectDelete("/api/projects/" + this.props.id + '/', this.props.id);
    };
    render() {
        let link = "/project/" + this.props.id + '/';
        return <div className="flex-block">
            <img className="delete" src="/static/img/close.png" onClick={this.onDelete}/>
            <Link to={link}><h3>{this.props.name}</h3></Link>
            <p>{this.props.created_at.substring(0, 10)}</p>
            <div className="user-short">{this.props.first_name} {this.props.last_name}</div>
        </div>;
    }
}


ProjectComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    name: state.project.projects[props.id].name,
    created_at: state.project.projects[props.id].created_at,
    first_name: state.users.users[state.project.projects[props.id].author].first_name,
    last_name:  state.users.users[state.project.projects[props.id].author].last_name,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectDelete
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectComponent);