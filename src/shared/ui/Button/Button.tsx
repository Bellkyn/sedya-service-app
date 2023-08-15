import cn from 'classnames';
import css from './Button.module.css';
import { ButtonProps } from 'shared/types/ButtonProps';

type Props = ButtonProps & {
	iconPosition?: 'left' | 'right';
};

export const Button: React.FC<Props> = ({
	onClick,
	variant,
	disabled = false,
	icon,
	iconPosition = 'left',
	title
}) => {
	const className = cn(css.root, css[`root_variant_${variant}`], {
		[css['root_reversed']]: iconPosition === 'right'
	});

	return (
		<button className={className} onClick={!disabled ? onClick : undefined}>
			{icon && variant !== 'text' && icon}
			{title}
		</button>
	);
};
