export const createPages = (pages: number[], pagesCount: number, currentPage: number) => {
    if (pagesCount > 3) {
        if (currentPage > 1) {
            for (let i = currentPage; i <= currentPage + 2; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        } else {
            for (let i = 1; i <= 3; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
}