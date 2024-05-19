import { writable } from 'svelte/store';
import { initial } from '$lib/constants';

export const bayHeight = writable(60);
export const pieces = writable(initial);