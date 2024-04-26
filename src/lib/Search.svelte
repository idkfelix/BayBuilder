<script>
  import InfiniteScroll from "svelte-infinite-scroll";

  import { getContext } from 'svelte';
  const modal = getContext('modal')
  const showModal = () => modal.set(bind(Search));
	
	let items = []
	let query = ''
	let page = 0

  const Search = async (query,page) => {
    let url = 'https://fasttimes.com.au/rest/V1/products-render-info?' + new URLSearchParams({
      // Required fields
      'currencyCode': 'AUD',
      'storeId': 1,
      'searchCriteria[pageSize]': 20,
      'searchCriteria[currentPage]': page,
      // Filter to return useful stuff
      'fields': 'items[url,name,id,price_info[final_price,regular_price],images[url]]',
    })
    
    // Transform query to upper case and split to array
    let words = query.toUpperCase().split(' ')
    
    // Create filter for each word
    for(var i = 0; i < words.length; i += 1){
      url += '&' + new URLSearchParams({
        // Dynamic keys have to be in [] for some reason?
        [`searchCriteria[filter_groups][${i}][filters][0][field]`]: 'name',
        [`searchCriteria[filter_groups][${i}][filters][0][value]`]: `%${words[i]}%`,
        [`searchCriteria[filter_groups][${i}][filters][0][condition_type]`]: 'like',
      })
    }

    // Return nothing if the query is empty
    if(query === '') return []
    
    // Fetch items with constructed query and get JSON data
    let res = await fetch('https://corsproxy.io/?'+encodeURI(url))
      .then(r => r.json())
    
    // Return results, empty if no results
    return res.items ?? []
  }
</script>

<section>
	<input
		placeholder="Search Items"
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

	<div>
		{#each items as item}
      <button
        on:click={() => {
          console.log(item.name)
          modal.set(null)
        }}
      >
        <img src={item.images[0].url} alt=""/>
        <p>{item.name}</p>
      </button>
		{/each}
	</div>
	
	<InfiniteScroll 
		on:loadMore={async() => {
			items = [
				...items, 
				...(await Search(query,(++page)))
			]
		}} 
		threshold={150} 
		window={true} 
	/>
</section>