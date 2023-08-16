import { ButtonProps } from 'shared/types/ButtonProps';
// import classNames from 'classnames';
import { Button } from 'shared/ui/';
import css from './Dropdown.module.css';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from 'shared/ui/Icons/';
import { DropdownListItem } from './DropdownListItem';

type Props = {
	buttonProps: ButtonProps & {
		iconPosition?: 'left' | 'right';
		variant?: 'primary' | 'secondary';
	};

	rows?: number;
};

const menuIcon = <MenuIcon />;
const closeIcon = <CloseIcon />;

export const Dropdown: React.FC<Props> = ({ buttonProps, rows = 5 }) => {
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
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
					<DropdownListItem />
				</div>
			)}
		</div>
	);
};
