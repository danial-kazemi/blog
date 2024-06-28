
export async function getData(URLAddress : string) {
    const response = await fetch(`${URLAddress}`,{ next: {
        revalidate: 10,
        tags: ['products'],
    }
    }, 
       );
    return response.json();
}
