export function handleSeenClick(record: any) {
    let existingSeenItems = JSON.parse(localStorage.getItem('moviesSeenList') as string) || [];
    existingSeenItems.push(record);
    localStorage.setItem('moviesSeenList', JSON.stringify(existingSeenItems));
  }

  export function handleWatchClick(record: any) {
    let existingWatchItems = JSON.parse(localStorage.getItem('moviesWatchList') as string) || [];
    existingWatchItems.push(record);
    localStorage.setItem('moviesWatchList', JSON.stringify(existingWatchItems));
  }