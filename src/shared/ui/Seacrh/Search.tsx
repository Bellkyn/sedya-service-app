import cn from 'classnames';
import { SearchIcon } from '../Icons';
import { IButtonProps } from 'shared/types';
import css from './Search.module.css';

type SearchProps = {
	placeholder?: string;
	showSearchIcon?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type Props = Pick<IButtonProps, 'onClick' | 'disabled' | 'title'> & SearchProps;

export const Search: React.FC<Props> = ({
	onClick,
	onChange,
	title,
	disabled,
	placeholder,
	showSearchIcon = true
}) => {
	return (
		<div className={cn(css.root)}>
			{showSearchIcon && <SearchIcon />}
			<input
				onChange={onChange}
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
		</div>
	);
};
