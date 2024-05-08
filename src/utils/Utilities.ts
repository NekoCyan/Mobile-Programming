import { API, ROUTES } from './Constant';

export function constructAPIURL(endpoint: keyof typeof ROUTES): string {
	const route = ROUTES[endpoint];
	return `${API}${route}`;
}

export function FormatCurrency(
	price: number,
	prefix: string = '$',
	suffix: string = '',
) {
	return prefix + `${price.toFixed(2)}` + suffix;
}

export function RandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
