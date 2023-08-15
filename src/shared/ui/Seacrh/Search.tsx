import { ButtonProps } from 'shared/types/ButtonProps';
import cn from 'classnames';
import css from './Search.module.css';
import { SearchIcon } from '../Icons';

type SearchProps = {
	placeholder?: string;
	showSearchIcon?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type Props = Pick<ButtonProps, 'onClick' | 'disabled' | 'title'> & SearchProps;

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
