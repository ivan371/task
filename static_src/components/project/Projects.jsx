import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectsFetchData} from '../../actions/project';
import Project from './Project';
import ProjectCreate from './ProjectCreate';
import { toJS } from './../../to-js'


class ProjectsComponent extends React.Component {
    componentDidMount() {
        this.props.projectsFetchData('/api/projects/');
    }
    render() {
        let projectList = [];
        console.log(this.props.isLoading);
        if (this.props.isLoading) {
            projectList = this.props.projectList.map(
                (projectId) => {
                    return <Project key={ projectId } id={ projectId } />
                }
            );
        }
        return <div>
            <div className="flex-container">
                { !this.props.isLoading ?  null : <ProjectCreate/> }
                { !this.props.isLoading ? <div className="loading"/> :  projectList }
            </div>
        </div>;
    }
}
const mapStoreToProps = (state, props) => ({
    isLoading: state.project.isLoading,
    projects: state.project.projects,
    projectList: state.project.projectList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectsFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectsComponent);
