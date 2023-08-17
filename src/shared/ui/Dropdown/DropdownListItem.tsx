import { IButtonProps } from 'shared/types';
import { Button } from 'shared/ui';
import css from './Dropdown.module.css';

type Props = Omit<IButtonProps, 'variant'>;

export const DropdownListItem: React.FC<Props> = props => {
	return (
		<div>
			<Button {...props} variant="text" className={css['button_style']} />
		</div>
	);
};

export type DropdownListItemProps = Props;

DropdownListItem.displayName = 'DropdownListItem';
