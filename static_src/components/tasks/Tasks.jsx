import React from 'react';
import { bindActionCreators } from 'redux';
import {taskFetchData} from '../../actions/tasks';
import {connect} from 'react-redux';
import Task from './Task';
import {taskUrl} from '../../constants';

class TasksComponent extends React.Component {
    static defaultProps = {
        addToPromises: () => {}
    };
    constructor(props){
        super(props);
        if( SERVER ){
            console.log('ADDTO_PROMISE');
            this.props.addToPromises(this.props.taskFetchData(taskUrl));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering) {
            this.props.taskFetchData(taskUrl);
            if(!this.props.isLogin) {
                this.redirect();
            }
        }
    }

    static staticRender(store){
        store.dispatch(taskFetchData(taskUrl))
    }
    redirect = () => {
        this.props.history.push('/login/');
    };
    render() {
        let taskList = [];
        if (this.props.isLoading) {
            taskList = this.props.taskList.map(
                (taskId) => {
                    return <Task key={ taskId } id={ taskId } />
                }
            );
        }
        return <div>
            <div className="flex-container">
                { !this.props.isLoading ? <div className="loading"/> :  taskList }
            </div>
        </div>;
    }
}

TasksComponent.propTypes = {
    server: React.PropTypes.bool,
    addToPromises: React.PropTypes.func,
};


const mapStoreToProps = (state, props) => ({
    isServerRendering: state.SSR.serverRendering,
    isLoading: state.tasks.isLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
    isLogin: state.users.isLogin,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            taskFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TasksComponent);
