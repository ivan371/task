import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openModal} from '../actions/users';

class ModalComponent extends React.Component {

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