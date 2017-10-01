import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import {fakeAuth} from './Login';

class LayoutComponent extends React.Component {
    render() {
        let self_data = null;
        if (fakeAuth.isAuthenticated) {
            self_data = <Link to="/self_room/"><button>Личный кабинет</button></Link>;
        }
        else {
            self_data = <Link to="/registration/"><button>Регистрация</button></Link>;
        }
        return <div>
            <div className="layout">
                {self_data}
                <Link to="/projects/"><button>Мои проекты</button></Link>
                <Link to="/tasks/"><button>Мои таски</button></Link>
                <Logout/>
            </div>
            { this.props.children }
        </div>;
    }
}


export default LayoutComponent;