function BlogArticlesList(){
    return(
        <>
            <div className="heading">
                <h1>Articles</h1>
                <a href="/blog">More Articles</a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img src="https://picsum.photos/357/325?random=1"/>
                    <p>7 ways to decor your home</p>
                    <a href="#">Read More</a>
                </div>
                <div>
                    <img src="https://picsum.photos/357/325?random=1&blur"/>
                    <p>7 ways to decor your home</p>
                    <a href="#">Read More</a>
                </div>
                <div>
                    <img src="https://picsum.photos/357/325?random=1&blur2"/>
                    <p>7 ways to decor your home</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </>
    )
}
export default BlogArticlesList