import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Tab, Tabs } from '@material-ui/core'
import styles from './CustomTabs.styles'
import Card from '../card/Card'
import CardHeader, { CardHeaderColor } from '../card/CardHeader'
import CardBody from '../card/CardBody'

interface Props {
	headerColor: CardHeaderColor
	plainTabs?: boolean
	tabs: {
		tabName: string
		tabIcon?: any
		tabContent: React.ReactNode
	}[]
	title: string
	selectedIndex: number
}

const useStyle = makeStyles(styles)

const CustomTabs: React.FC<Props> = props => {
	const { headerColor, plainTabs, tabs, title, selectedIndex } = props

	const [value, setValue] = React.useState(selectedIndex)
	const handleChange = (event: any, val: number) => {
		setValue(val)
	}

	const classes = useStyle()

	const cardTitle = classNames({
		[classes.cardTitle]: true,
	})

	return (
		<Card className=''>
			<CardHeader color={headerColor} plain={plainTabs} className=''>
				{title !== undefined ? <div className={cardTitle}>{title}</div> : null}
				<Tabs
					value={value}
					onChange={handleChange}
					classes={{
						root: classes.tabsRoot,
						indicator: classes.displayNone,
					}}
					variant='scrollable'
					scrollButtons='auto'
				>
					{tabs.map(prop => {
						let icon = {}
						if (prop.tabIcon) {
							icon = {
								icon: <prop.tabIcon />,
							}
						}
						return (
							<Tab
								classes={{
									root: classes.tabRootButton,
									selected: classes.tabSelected,
									wrapper: classes.tabWrapper,
								}}
								key={prop.tabName}
								label={prop.tabName}
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...icon}
							/>
						)
					})}
				</Tabs>
			</CardHeader>
			<CardBody className=''>
				{tabs.map((prop, key) => {
					if (key === value) {
						// eslint-disable-next-line react/no-array-index-key
						return <div key={key}>{prop.tabContent}</div>
					}
					return null
				})}
			</CardBody>
		</Card>
	)
}

CustomTabs.defaultProps = {
	plainTabs: false,
}

CustomTabs.propTypes = {
	headerColor: PropTypes.oneOf<CardHeaderColor>([
		'warningCardHeader',
		'successCardHeader',
		'dangerCardHeader',
		'infoCardHeader',
		'primaryCardHeader',
		'roseCardHeader',
	]).isRequired,
	title: PropTypes.string.isRequired,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabName: PropTypes.string.isRequired,
			// eslint-disable-next-line react/forbid-prop-types
			tabIcon: PropTypes.object.isRequired,
			tabContent: PropTypes.node.isRequired,
		}).isRequired
	).isRequired,
	plainTabs: PropTypes.bool,
	selectedIndex: PropTypes.number.isRequired,
}

export default CustomTabs
