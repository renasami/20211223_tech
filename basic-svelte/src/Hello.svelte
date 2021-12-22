<script>
	//バインディングとテキスト挿入
	//srcタグ等にも使用可能
	export let name;
	let neme2 ="myjlab"
	let src = "https://grapee.jp/wp-content/uploads/2021/12/s-14094_main.jpg"
	let alt = "ガッキー"
	let num = 0 
	$: floor = Math.floor(num)
	const random = () => {
		num = Math.random() * 10
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>Hello {neme2}!</h1>
	<img src={src} alt={alt} />
	<h1>{num}</h1>
	<h1>{floor}</h1>
	<button on:click={random}>random</button>
	{#if num > 0.5}
		<h1>冬休み嬉しい</h1>
	{:else}
		<h1>冬休み短すぎ</h1>
	{/if}
</main>
