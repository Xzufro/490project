type GamePageProps = {
    page: number;
    total_pages: number;
    handleChangePage: (newPage: number) => void;
}

export default function NextPage({ page, total_pages, handleChangePage }: GamePageProps)  {
    return (
        <div className='centered-pagination'>
            <button className='previous' onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <p className='text'>{page} of {total_pages}</p>
            <button className='next' onClick={() => handleChangePage(page + 1)} disabled={page === total_pages}>
                Next
            </button>
        </div>
    )
}