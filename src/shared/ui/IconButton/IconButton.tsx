import { IButtonProps } from 'shared/types';
import css from './IconButton.module.css';
import cn from 'classnames';

type IconButtonProps = {
	variant?: 'primary' | 'secondary';
	icon: React.JSX.Element;
};

type Props = Omit<IButtonProps, 'title' | 'variant'> & IconButtonProps;

export const IconButton: React.FC<Props> = ({
	onClick,
	icon,
	disabled = false,
	variant = 'primary'
}) => {
	return (
		<button
			className={cn(css.root, css[`root_variant_${variant}`])}
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};
