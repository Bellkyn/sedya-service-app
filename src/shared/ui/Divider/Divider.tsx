import css from './Divider.module.css';
import cn from 'classnames';
type DividerProps = {
	additionalStyles?: string;
	orientation?: 'horizontal' | 'vertical';
};

export const Divider = (
	props: DividerProps = { orientation: 'horizontal' }
) => {
	const isHorizontal = props.orientation === 'horizontal';

	const className = cn(
		css.root,
		isHorizontal ? css['root_horizontal'] : css['root_vertical']
	);
	return <span className={className} />;
};
