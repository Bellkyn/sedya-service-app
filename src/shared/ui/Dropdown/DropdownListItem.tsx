import { IButtonProps } from 'shared/types';
import { Button } from 'shared/ui';

type Props = Omit<IButtonProps, 'variant'>;

export const DropdownListItem: React.FC<Props> = props => {
	return (
		<div style={{ flex: 0, width: 'max-content' }}>
			<Button {...props} variant="text" />
		</div>
	);
};

export type DropdownListItemProps = Props;

DropdownListItem.displayName = 'DropdownListItem';
