import { Button, Divider, Logo, PersonIcon, Search } from 'shared/ui';
import css from './LayoutHeader.module.css';

type Props = {
	children?: boolean;
};

export const LayoutHeader: React.FC<Props> = () => {
	return (
		<header className={css.root}>
			<Logo />
			<Divider orientation="vertical" />
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
