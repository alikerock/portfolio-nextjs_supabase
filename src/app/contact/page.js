import Image from "next/image";
import Link from 'next/link'

export const metadata = {
  title: "Contact - Minimal Portfolio",
  description: "welcome to my portfolio",
};

export default function Contact(){
  return(
		<div className="container about_content shadow">
			<div className="contact">
				<h3 className="heading6">Let&apos;s Get in Touch</h3>
				<p>
					You can call me, email me directly or connect with me through my social networks.
				</p>
				<p>
					(+40) 744122222<br />
					<a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>
				</p>
				<ul className="social_links">
          <li><Link href=""><Image src="/images/twitter.png" width={32} height={32} alt="twitter"/></Link></li>
          <li><Link href=""><Image src="/images/facebook.png" width={32} height={32} alt="facebook"/></Link></li>
          <li><Link href=""><Image src="/images/dribble.png" width={32} height={32} alt="dribble"/></Link></li>
				</ul>
			</div>
			<hr className="double"/>
			<div className="form">
				<h3 className="heading6">Need a Quote?</h3>
				<p>
					Use the form below. All fields are required.
				</p>
				<div className="contact_form">
					<form action="">
						<p className="field">
							<label htmlFor="username">Full Name:</label>
							<input type="text" id="username" placeholder="Your Name"/>
						</p>
						<p className="field">
							<label htmlFor="useremail">Email Address:</label>
							<input type="text" id="useremail" placeholder="Your Email"/>
						</p>
						<p className="field">
							<label htmlFor="userphone">Phone Number:</label>
							<input type="text" id="userphone" placeholder="Your Phone number"/>
						</p>
						<p className="field">
							<label htmlFor="project-type">Project Type:</label>
							<select name="" id="project-type">
								<option value="" readonly>- Select Value -</option>
								<option value="Web">Web</option>
								<option value="Mobile">Mobile</option>
								<option value="Print">Print</option>
							</select>
						</p>
						<p className="field">
							<label htmlFor="project-desc">Project Description:</label>
							<textarea name="" id="project-desc" cols="30" rows="10" placeholder="project description"></textarea>
						</p>
						<p className="field">
							<label htmlFor="budget">Available Budget:</label>
							<input type="number" id="budget" placeholder="$0.00"/>
						</p>
						<p className="submit">
							<input type="submit" className="primary-btn" value="give me a quote"/>
						</p>
					</form>
				</div>
			</div>
		</div>
  )
}