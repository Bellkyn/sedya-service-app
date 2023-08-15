import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import css from './Layout.module.css';

type Props = {
	headerSlot?: ReactNode;
	footerSlot?: ReactNode;
};

export function Layout(props: Props) {
	return (
		<div className={css.root}>
			{props.headerSlot}
			<div>
				<Outlet />
			</div>
			{props.footerSlot}
		</div>
	);
}
