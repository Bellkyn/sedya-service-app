import { Dropdown } from 'shared/ui';

export const MainPage = () => {
	return (
		<>
			<Dropdown
				buttonProps={{
					onClick: () => console.log('dropdown'),
					title: 'Категории ресурсов',
					variant: 'primary'
				}}
			/>
		</>
	);
};
