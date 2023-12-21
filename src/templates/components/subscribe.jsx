function Subscribe() {
    return(
        <>
            <section>
                <h1>Join Our Newsletter</h1>
                <form action="#">
                    <label htmlFor="email">Sign up for deals, new products and promotions</label>
                    <div className="field">
                        <input type="email" id="email" placeholder="Email address"/>
                        <button>Signup</button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Subscribe