import { writable } from 'svelte/store';
import { initial } from '$lib/constants';

export const title = writable('New Bay')
export const bayHeight = writable(60);
export const pieces = writable(initial);

export const storeHeight = writable(60);
export const storeWidth = writable(60);
export const storeTitle = writable('New Store')
