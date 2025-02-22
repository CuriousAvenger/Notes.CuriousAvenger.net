import {QuartzComponent, QuartzComponentConstructor, QuartzComponentProps} from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
    const quartz = "https://github.com/jackyzha0/quartz"
    const ccm = "https://github.com/CuriousAvenger/Notes.CuriousAvenger.net"
    const linkd = "https://www.linkedin.com/in/sai-praneth-raju/"
    
    const Footer: QuartzComponent = (props: QuartzComponentProps) => {
        const year = new Date().getFullYear()
        return (
            <footer>
                <p>Powered By <a href={quartz} class="external">Quartz</a> © {year} | 
                  <a href={ccm} class="external"> GitHub</a> - Notes.CuriousAvenger.net | 
                  <a href={linkd} class="external"> LinkedIn</a> - Sai Praneth
                </p>
            </footer>
        )
    }

    Footer.css = style
    return Footer
}) satisfies QuartzComponentConstructor