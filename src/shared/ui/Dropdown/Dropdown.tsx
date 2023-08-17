import React from 'react';
import { useState, useMemo } from 'react';
import { Button } from 'shared/ui/';
import { IButtonProps } from 'shared/types';
import { CloseIcon, MenuIcon } from 'shared/ui/Icons/';
import { DropdownListItem, DropdownListItemProps } from './DropdownListItem';
import css from './Dropdown.module.css';

type Props = {
	buttonProps: IButtonProps & {
		iconPosition?: 'left' | 'right';
		variant?: 'primary' | 'secondary';
	};

	children:
		| React.ReactElement<DropdownListItemProps>
		| React.ReactElement<DropdownListItemProps>[];
	rows?: number;
};

const menuIcon = <MenuIcon />;
const closeIcon = <CloseIcon />;

export const Dropdown: React.FC<Props> = ({
	buttonProps,
	rows = 5,
	children
}) => {
	const [active, setActive] = useState<boolean>(false);
	const [icon, setIcon] = useState<React.JSX.Element>(menuIcon);

	const onButtonClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (active) {
			setActive(false);
			setIcon(menuIcon);
		} else {
			setActive(true);
			setIcon(closeIcon);
		}
		buttonProps.onClick(e);
	};

	const validatedChildren = useMemo(() => {
		const childrens = Array.isArray(children) ? children : [children];
		return React.Children.map(childrens, child => {
			if (React.isValidElement(child)) {
				if (child.type !== DropdownListItem) {
					return null;
				}
				// throw new Error('child element is not "DropdownListItem"');
				else return child;
			}
		});
	}, [children]);

	return (
		<div className={css.root}>
			<Button
				{...buttonProps}
				onClick={onButtonClick}
				icon={icon}
				iconPosition="right"
			/>
			{active && (
				<div
					className={css.menu}
					style={{
						gridAutoFlow: 'column',
						gridTemplateRows: `repeat(${rows},max-content)`
					}}
				>
					{/* {validatedChildren && validatedChildren}
					 */}
					{children}
				</div>
			)}
		</div>
	);
};
