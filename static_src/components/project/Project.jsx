import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProjectComponent extends React.Component {
    render() {
        let link = "/project/" + this.props.id + '/';
        return <div className="flex-block">
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
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectComponent);