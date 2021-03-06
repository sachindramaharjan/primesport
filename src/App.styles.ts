import { createStyles } from '@material-ui/core'
import { drawerWidth, transition, container } from './index.styles'

const appStyles = (theme: any) =>
	createStyles({
		wrapper: {
			position: 'relative',
			top: '0',
			height: '98vh',
		},
		mainPanel: {
			[theme.breakpoints.up('md')]: {
				width: `calc(100% - ${drawerWidth}px)`,
			},
			overflow: 'auto',
			position: 'sticky',
			float: 'right',
			...transition,
			maxHeight: '100%',
			width: '100%',
			overflowScrolling: 'touch',
		},
		content: {
			marginTop: '70px',
			padding: '15px',
			minHeight: 'calc(100vh - 123px)',
		},
		container,
		map: {
			marginTop: '70px',
		},
	})

export default appStyles
