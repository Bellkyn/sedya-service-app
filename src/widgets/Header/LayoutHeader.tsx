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
import { useState } from 'react';

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

	const [dropdownActive, setDropdownActive] = useState(false);
	const [searchActive, setSearchActive] = useState(false);

	const onSeacrhInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (dropdownActive) setDropdownActive(false);
		setSearchActive(true);
	};

	const onChangeDropdown = (e: boolean) => {
		if (e === true && searchActive) setSearchActive(false);
		setDropdownActive(e);
	};

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
				onChange={onChangeDropdown}
				active={dropdownActive}
			>
				{items.map(item => (
					<DropdownListItem
						key={item.title}
						onClick={() => {}}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</Dropdown>
			<Search
				title="Найти"
				placeholder="Начните вводить название..."
				active={searchActive}
				onChange={onSeacrhInput}
				onClick={e => console.log(e)}
				style={{ marginLeft: '20px' }}
			/>
			<div className={css['right_actions']}>
				<Button
					title="Избранное"
					variant="text"
					onClick={() => console.log('abcd')}
				/>
				<Button
					title="Тарифы доступа"
					variant="text"
					onClick={() => console.log('abcd')}
				/>
				<Button
					title="Регистрация"
					variant="primary"
					icon={<PersonIcon />}
					onClick={() => console.log('abcd')}
				/>
			</div>
		</header>
	);
};
