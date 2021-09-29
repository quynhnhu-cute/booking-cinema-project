import AdminPage from 'containers/admin/AdminPage'
import withLayout from 'hocs/withLayout'
import React, { Component } from 'react'

 class AdminLayout extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default withLayout(AdminLayout)
