import cn from 'classnames';
import css from './Button.module.css';
import { IButtonProps } from 'shared/types';

type Props = IButtonProps & {
	iconPosition?: 'left' | 'right';
};

export const Button: React.FC<Props> = ({
	onClick,
	variant,
	disabled = false,
	icon,
	iconPosition = 'left',
	title,
	className
}) => {
	const classes = cn(
		css.root,
		css[`root_variant_${variant}`],
		{
			[css['root_reversed']]: iconPosition === 'right'
		},
		className
	);

	return (
		<button className={classes} onClick={!disabled ? onClick : undefined}>
			{icon && icon}
			{title}
		</button>
	);
};
