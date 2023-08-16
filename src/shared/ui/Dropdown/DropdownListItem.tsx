import { Button } from '..';

export const DropdownListItem = () => {
	return (
		<div style={{ flex: 0, width: 'max-content' }}>
			<Button
				title="Все категории"
				variant="text"
				onClick={() => {
					console.log('asd');
				}}
			/>
		</div>
	);
};
