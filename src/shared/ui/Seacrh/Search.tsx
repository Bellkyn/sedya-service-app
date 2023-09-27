import cn from 'classnames';
import { HTMLAttributes, useEffect, useState } from 'react';
import { SearchIcon } from '../Icons';
import { IButtonProps } from 'shared/types';
import css from './Search.module.css';

type SearchProps = {
	placeholder?: string;
	active?: boolean;
	defaultActive?: boolean;
	showSearchIcon?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type Props = Pick<IButtonProps, 'onClick' | 'disabled' | 'title'> &
	SearchProps &
	HTMLAttributes<HTMLDivElement>;

export const Search: React.FC<Props> = ({
	onClick,
	active,
	defaultActive,
	onChange,
	title,
	disabled,
	placeholder,
	showSearchIcon = true,
	...props
}) => {
	const [isActive, setIsActive] = useState<boolean>(defaultActive || false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsActive(true);
		onChange(e);
	};

	const handleBlur = () => {};

	useEffect(() => {
		if (active !== undefined) setIsActive(active);
	}, [active]);

	return (
		<div className={cn(css.root)} {...props}>
			{showSearchIcon && <SearchIcon />}
			<input
				onChange={handleChange}
				onBlur={handleBlur}
				className={css.search_input}
				placeholder={placeholder}
			/>
			<button
				className={css.search_button}
				onClick={onClick}
				disabled={disabled}
			>
				{title}
			</button>
			{isActive && <div>active</div>}
		</div>
	);
};
