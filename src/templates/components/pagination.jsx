export default function Pagination({skip,itemsPerPage,total, setSkip}) {
    const pages = [];
    const round = Math.ceil(total / itemsPerPage);
    const className = ""
    const activePageNumber = Math.floor(skip / itemsPerPage) // refactor needed!
    const handleGoToPage = (i)=> {
        setSkip(i * itemsPerPage)
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    for (let i = 0; i < round; i++) {
        const onClick = (event)=> {
            event.preventDefault();
            handleGoToPage(i);
        }
        pages.push(
            <button key={i}
                    onClick={onClick}
                    className={`${className} ${activePageNumber === i ? 'bg-blue-500' : '' }`}
            >{i + 1}</button>
        );

    }
    return (
        <div className="paging">
            {round > 1 ? pages : null}
        </div>
    )
}