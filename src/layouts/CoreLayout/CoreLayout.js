import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.less'
import 'ASSET/styles/index.styl'

import 'element-theme-default'

export const CoreLayout = ({ children, location }) => (
    <div className='container'>
        {children}
    </div>
)

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default CoreLayout
