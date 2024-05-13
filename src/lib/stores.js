import { writable } from 'svelte/store';
import { initial } from '$lib/constants';

export const pieces = writable(initial);
export const bayHeight = writable(60);