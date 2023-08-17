export interface IButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	variant: 'primary' | 'secondary' | 'text';
	disabled?: boolean;
	icon?: React.JSX.Element;
	title: string;
	className?: string;
}
