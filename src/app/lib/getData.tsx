interface Post {
    id: number;
    title: string;
}
export async function getData(URLAddress : string) {
    const response = await fetch(`${URLAddress}`,{ next: {
        revalidate: 10
    } 

    }, 
       );
    const data: Post[] = await response.json();
    return data;
}
