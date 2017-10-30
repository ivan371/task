import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openModal} from '../actions/users';
import PropTypes from 'prop-types';

export class ModalComponent extends React.Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        openModal: PropTypes.func.isRequired,
    };

    onClose = () => {
        this.props.openModal(!this.props.isOpen);
    };

    render() {
        if (!this.props.isOpen) {
            return null;
        }
        return (
            <div className="b-modal_container" >
                <div className="b-modal">
                    <button onClick={ this.onClose }>Закрыть</button>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

ModalComponent.propTypes = {
};


const mapStoreToProps = (state, props) => ({
    isOpen: state.users.isModalOpen,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            openModal,
        }, dispatch),
    };
};


export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ModalComponent);