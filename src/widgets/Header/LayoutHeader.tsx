import {
	Button,
	Divider,
	Dropdown,
	DropdownListItem,
	Logo,
	PersonIcon,
	Search
} from 'shared/ui';
import css from './LayoutHeader.module.css';

type Props = {
	children?: boolean;
};

export const LayoutHeader: React.FC<Props> = () => {
	const items = [
		{
			title: 'Все категории',
			icon: <PersonIcon />
		},
		{
			title: 'Ui Kits',
			icon: <PersonIcon />
		},
		{
			title: 'Coded Templates',
			icon: <PersonIcon />
		},
		{
			title: 'Wireframe kits',
			icon: <PersonIcon />
		},
		{
			title: 'Illustrations',
			icon: <PersonIcon />
		},
		{
			title: 'Fonts',
			icon: <PersonIcon />
		},
		{
			title: 'Presentation',
			icon: <PersonIcon />
		},
		{
			title: 'Mockups',
			icon: <PersonIcon />
		},
		{
			title: '3D Assets',
			icon: <PersonIcon />
		},
		{
			title: 'Ison Sets',
			icon: <PersonIcon />
		},
		{
			title: 'Themes & Templates',
			icon: <PersonIcon />
		},
		{
			title: 'Бесплатные',
			icon: <PersonIcon />
		}
	];

	return (
		<header className={css.root}>
			<Logo />
			<Divider orientation="vertical" />
			<Dropdown
				buttonProps={{
					onClick: () => console.log('dropdown'),
					title: 'Категории ресурсов',
					variant: 'primary'
				}}
			>
				{items.map(item => (
					<DropdownListItem
						onClick={() => {}}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</Dropdown>
			<Search
				title="Search"
				placeholder="placeholder"
				onChange={e => console.log(e)}
				onClick={e => console.log(e)}
			/>
			<div className={css['right_actions']}>
				<Button
					title="Избранное"
					variant="text"
					// iconPosition="right"
					onClick={() => console.log('abcd')}
				/>
				<Button
					title="Тарифы доступа"
					variant="text"
					// iconPosition="right"
					onClick={() => console.log('abcd')}
				/>
				<Button
					title="Регистрация"
					variant="primary"
					icon={<PersonIcon />}
					// iconPosition="right"
					onClick={() => console.log('abcd')}
				/>
			</div>
		</header>
	);
};
