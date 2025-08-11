export const metadata = {
  title: "About - Minimal Portfolio",
  description: "welcome to my portfolio",
};

export default function About(){
  return(
    <div className="container about_content shadow">
      <h3 className="heading6">About Me</h3>
      <p className="narrow-p">I&apos;m a web designer based in Romania. I create clean websites, love Apple products and I’m a big fan of trance music.
      </p>            
      <p className="narrow-p">
          Wanna get in touch? Do a quick scroll to the bottom of the page. It&apos;s all there :) 
      </p>
      <hr className="double"/>
      <h4 className="heading4 available">I&apos;m currently available for freelance projects.</h4>        
      <h4 className="heading4 rate">Rates start at $50/hour.</h4>    
      <p className="portfolio_link">
          <a href="/projects" className="primary-btn">See my portfolio</a>
      </p>  
  </div>
  )
}