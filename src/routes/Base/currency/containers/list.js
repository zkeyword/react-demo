import { connect } from 'react-redux'
import { entAccountList } from '../modules/list'

import components from '../components/list'

const mapDispatchtoProps = {
    entAccountList
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, mapDispatchtoProps)(components)
