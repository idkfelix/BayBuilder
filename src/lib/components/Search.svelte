<script>
  import InfiniteScroll from "svelte-infinite-scroll";
  import { useLazyImage } from 'svelte-lazy-image';
  import { getContext } from 'svelte';
  const { close } = getContext('simple-modal');
	
  export let onOkay = () => {}

	let items = []
	let query = ''
	let page = 0

  const Search = async (query,page) => {
    let url = 'https://fasttimes.com.au/rest/V1/products-render-info?' + new URLSearchParams({
      'currencyCode': 'AUD',
      'storeId': 1,
      'searchCriteria[pageSize]': 50,
      'searchCriteria[currentPage]': page,
      'fields': 'items[name,images[url]]',
    })

    let words = query.toUpperCase().split(' ')
    for(var i = 0; i < words.length; i += 1){
      url += '&' + new URLSearchParams({
        // Dynamic keys have to be in [] for some reason?
        [`searchCriteria[filter_groups][${i}][filters][0][field]`]: 'name',
        [`searchCriteria[filter_groups][${i}][filters][0][value]`]: `%${words[i]}%`,
        [`searchCriteria[filter_groups][${i}][filters][0][condition_type]`]: 'like',
      })
    }

    if(query === '') return []

    let res = await fetch('https://corsproxy.io/?'+encodeURI(url))
      .then(r => r.json())
    return res.items ?? []
  }
</script>

<section>
	<!-- svelte-ignore a11y-autofocus -->
	<input
    class="w-full p-2 "
		placeholder="Search Items"
    autofocus
    onfocus="this.select()"
		bind:value={query}
    on:change={async() => {
      page = 1
      items = await Search(query, page)
    }}
    on:keydown={async(e) => {
      if(e.key == "Enter"){
        page = 1
        items = await Search(query, page)
      }
    }}
	/>

  {#if items[0]}
    <div class="w-full max-h-[70dvh] my-4 py-4 overflow-y-scroll">
      {#each items as item}
        <button
          class="mx-2 max-w-44"
          on:click={() => {
            onOkay(item)
            close()
          }}
        >
          <img use:useLazyImage data-src={item.images[0].url} alt=""/>
          <p>{item.name}</p>
        </button>
      {/each}
      <InfiniteScroll 
        on:loadMore={async() => {
          items = [
            ...items, 
            ...(await Search(query,(++page)))
          ]
        }} 
        threshold={150} 
      />
    </div>
  {/if}
</section>