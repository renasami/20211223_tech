import Hello from './Hello.svelte';

const app = new Hello({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;