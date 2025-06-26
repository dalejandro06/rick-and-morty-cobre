/**
 * Creates a debounced version of a function
 * @param callback - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns A debounced version of the callback function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
	callback: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timeoutId: number | null = null;

	return (...args: Parameters<T>) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			callback(...args);
		}, delay);
	};
}
