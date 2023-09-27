import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'shared/ui/';
import { IButtonProps } from 'shared/types';
import { CloseIcon, MenuIcon } from 'shared/ui/Icons/';
import { DropdownListItemProps } from './DropdownListItem';
import css from './Dropdown.module.css';
import classNames from 'classnames';

type Props = {
	buttonProps: IButtonProps & {
		iconPosition?: 'left' | 'right';
		variant?: 'primary' | 'secondary';
	};
	onChange?: (active: boolean) => void;
	active?: boolean;
	defaultActive?: boolean;
	children:
		| React.ReactElement<DropdownListItemProps>
		| React.ReactElement<DropdownListItemProps>[];
	rows?: number;
};

const menuIcon = <MenuIcon />;
const closeIcon = <CloseIcon />;

export const Dropdown: React.FC<Props> = ({
	buttonProps,
	onChange,
	active,
	defaultActive = false,
	rows = 5,
	children
}) => {
	const [isActive, setIsActive] = useState<boolean>(defaultActive || false);
	const [icon, setIcon] = useState<React.JSX.Element>(menuIcon);

	const onButtonClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (isActive) {
			setIsActive(false);
			onChange && onChange(false);
			setIcon(menuIcon);
		} else {
			setIsActive(true);
			onChange && onChange(true);
			setIcon(closeIcon);
		}
		buttonProps.onClick(e);
	};

	useEffect(() => {
		if (active !== undefined) setIsActive(active);
	}, [active]);

	return (
		<div className={css.root}>
			<Button
				{...buttonProps}
				onClick={onButtonClick}
				icon={icon}
				iconPosition="right"
			/>

			<div
				className={classNames(css.menu, isActive && css['menu_active'])}
				style={{
					gridAutoFlow: 'column',
					gridTemplateRows: `repeat(${rows},max-content)`
				}}
			>
				{/* {validatedChildren && validatedChildren} */}

				{children}
			</div>
		</div>
	);
};

// const validatedChildren = useMemo(() => {
// 	const childrens = Array.isArray(children) ? children : [children];
// 	return React.Children.map(childrens, child => {
// 		if (React.isValidElement(child)) {
// 			if (child.type !== DropdownListItem) {
// 				return null;
// 				// throw new Error('child element is not "DropdownListItem"');
// 			} else return child;
// 		}
// 	});
// }, [children]);
