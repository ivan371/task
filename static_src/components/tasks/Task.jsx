import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {taskDelete} from '../../actions/tasks';

class TaskComponent extends React.Component {
    onDelete = (e) => {
        this.props.taskDelete("/api/tasks/" + this.props.id + '/', this.props.id);
    };
    render() {
        let status = null;
        switch (this.props.status) {
            case 1:
                status = "New";
                break;
            case 2:
                status = "Waiting";
                break;
            case 3:
                status = "Complete";
                break;
        }
        const link = "/task/" + this.props.id + '/';
        return <div className="flex-block">
            <img className="delete" src="/static/img/close.png" onClick={this.onDelete}/>
            <Link to={ link }><h3>{this.props.text}</h3></Link>
            <p>{this.props.description.substring(0, 20)}...</p>
            <p>{this.props.created_at.substring(0, 10)}  {status}</p>
            <div className="user-short">{this.props.first_name} {this.props.last_name}</div>
        </div>;
    }
}

TaskComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    text: state.tasks.tasks[props.id].text,
    description: state.tasks.tasks[props.id].description,
    status: state.tasks.tasks[props.id].status,
    created_at: state.tasks.tasks[props.id].created_at,
    first_name: state.tasks.tasks[props.id].assign_to !== null ? state.users.users[state.tasks.tasks[props.id].assign_to].first_name : null,
    last_name: state.tasks.tasks[props.id].assign_to !== null ? state.users.users[state.tasks.tasks[props.id].assign_to].last_name : null,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            taskDelete,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TaskComponent);