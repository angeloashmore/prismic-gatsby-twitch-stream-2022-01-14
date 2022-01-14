type LayoutProps = {
	children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<div>
			<header className="bg-neutral-700 h-11"></header>
			<main>{children}</main>
			<footer className="bg-neutral-100 text-neutral-700 text-xs px-8 py-4">
				<div className="max-w-4xl mx-auto w-full">Text</div>
			</footer>
		</div>
	);
}
