export function MultiStyles(...styles: any[]) {
	return styles.filter((x) => Object.keys(x).length > 0);
}
