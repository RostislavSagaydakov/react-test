export default function Pagination({skip ,itemsPerPage = 10,total = 0, setSkip = 0}) {
    const pages = [];
    const round = Math.ceil(total / itemsPerPage);
    const className = ""
    const activePageNumber = Math.floor(skip / itemsPerPage) // refactor needed!
    const goToTop = ()=> {document.body.scrollTop = document.documentElement.scrollTop = 0;}
    const handleGoToPage = (i)=> {
        setSkip(i * itemsPerPage)
        goToTop()
    }
    const prev = ()=> {
        setSkip((activePageNumber -1) * itemsPerPage)
        goToTop()
    }
    const next = ()=> {
        setSkip((activePageNumber + 1) * itemsPerPage)
        goToTop()
    }
    for (let i = 0; i < round; i++) {
        const switchPage = (event)=> {
            event.preventDefault();
            handleGoToPage(i);
        }
        if (activePageNumber <= i+4 && activePageNumber >= i-4) {
            pages.push(
                <button key={i}
                        onClick={switchPage}
                        className={`${className} ${activePageNumber === i ? 'bg-blue-500' : '' }`}
                >{i + 1}</button>
            );
        }

    }
    return (
        <div className="paging">
            {activePageNumber > 0 && <button onClick={prev}>prev</button>}
            {round > 1 ? pages : null}
            {activePageNumber < round -1 && <button onClick={next}>next</button>}
        </div>
    )
}