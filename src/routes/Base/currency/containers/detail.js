import { connect } from 'react-redux'
import { entAccountList } from '../modules/detail'

import components from '../components/detail'

const mapDispatchtoProps = {
    entAccountList
}

const mapStateToProps = (state) => ({
    data2: state.data2
})

export default connect(mapStateToProps, mapDispatchtoProps)(components)
