import { API, ROUTES } from './Constant';

export function constructAPIURL(endpoint: keyof typeof ROUTES): string {
	const route = ROUTES[endpoint];
	return `${API}${route}`;
}
