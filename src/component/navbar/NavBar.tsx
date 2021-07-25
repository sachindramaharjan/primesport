import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components

// import { Button } from '@material-ui/core'
import styles from './NavBar.styles'
import { Props } from '../sidebar/Sidebar'

const useStyles = makeStyles(styles)

const Header: React.FC<Props> = ({ color, handleDrawerToggle }) => {
	const classes = useStyles()
	// const routeName = useRouteName()

	const appBarClasses = classNames({
		[` ${classes.primary}`]: { color },
	})
	return (
		<AppBar className={classes.appBar + appBarClasses}>
			<Toolbar className={classes.container}>
				<div className={classes.flex}>
					{/* Here we create navbar brand, based on route name */}
					{/* <Button color='transparent' href='#' className={classes.title}>
						{routeName}
					</Button> */}
				</div>
				{/* <Hidden smDown implementation='css'>
					{props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
				</Hidden> */}
				<Hidden mdUp implementation='css'>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

Header.propTypes = {
	color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
		.isRequired,
	handleDrawerToggle: PropTypes.func.isRequired,
}

export default Header
