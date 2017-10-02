import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectsFetchData, projectsMoreFetchData} from '../../actions/project';
import Project from './Project';
import ProjectCreate from './ProjectCreate';
import { toJS } from './../../to-js'
import {count, page, projectUrl} from '../../constants';


class ProjectsComponent extends React.Component {
    componentDidMount() {
        this.props.projectsFetchData(projectUrl);
    }
    onLoadMore = (e) => {
        this.props.projectsMoreFetchData(projectUrl + '?' + page + this.props.page);
    };
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
                { this.props.isLoading && this.props.count > (count * (this.props.page - 1)) ? <div className="flex-block">
                    <button onClick={this.onLoadMore}>Показать еще</button>
                </div> : null }
            </div>
        </div>;
    }
}
const mapStoreToProps = (state, props) => ({
    isLoading: state.project.isLoading,
    projects: state.project.projects,
    projectList: state.project.projectList,
    count: state.project.count,
    page: state.project.page,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectsFetchData,
            projectsMoreFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectsComponent);
