function BaseFooter() {
    return(
        <footer>
            <div>
                <p className="copy">
                    Copyright &copy; 2023 Elegant. All rights reserved
                </p>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-use">Terms of Use</a>
            </div>
            <ul>
                <li><a href="instagram" className="instagram"></a></li>
                <li><a href="facebook" className="facebook"></a></li>
                <li><a href="youtube" className="youtube"></a></li>
            </ul>
        </footer>
    )
}
export default BaseFooter;