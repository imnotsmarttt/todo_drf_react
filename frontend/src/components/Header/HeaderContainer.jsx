import {connect} from 'react-redux'
import Header from './Header'
import {logout} from '../../redux/actions/auth'

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps, {logout})(Header)