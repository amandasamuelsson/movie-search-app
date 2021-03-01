import { MovieItem } from "./welcomePage/Titel";

export function handleSeenClick(record: MovieItem) {
    let seenItems = JSON.parse(localStorage.getItem('moviesSeenList') as string) || [];
    seenItems.push(record);
    localStorage.setItem('moviesSeenList', JSON.stringify(seenItems));
  }

export function handleWatchClick(record: any) {
    let watchItems = JSON.parse(localStorage.getItem('moviesWatchList') as string) || [];
    watchItems.push(record);
    localStorage.setItem('moviesWatchList', JSON.stringify(watchItems));   
  }

export function removeWatchlistItem(key: string) {
    let watchItems = JSON.parse(localStorage.getItem('moviesWatchList') as string) || [];
    const newItems = watchItems.filter((item: MovieItem) => item.key !== key);
    localStorage.setItem('moviesWatchList', JSON.stringify(newItems));
    
}